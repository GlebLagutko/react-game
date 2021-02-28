import React, {useRef, useState} from 'react';
import Popup from 'reactjs-popup';

import {Button, Modal} from 'react-bootstrap';
import store, {saveState} from "../store";
import {format} from "../Timer";
import {NewGameButton} from "../NewGameButton";
import {useSelector, useDispatch} from 'react-redux'
import {CHANGE_SHOW} from "../store/actions/ChangeEnableToShowModal";
import {TextField} from "@material-ui/core";
import {gql, useMutation} from "@apollo/client";
import {clientQuery} from "../client";
import {FETCH_COMPLETED} from "../store/actions/FetchCompleted";
import {cache} from "webpack";
import {UPDATE_TIME} from "../store/actions/UpdateTime";
import {CHANGE_IS_SOLVED} from "../store/actions/ChangeIsSolved";

//
const isSolved = state => state.value.isSolved;
const isShow = state => state.value.show;
const isAuto = state => state.value.autoSolution;

const ADD_TODO = gql`
    mutation AddGame($user:String!,$difficulty:String!,$time:Int!){
        addGame(user:$user,difficulty:$difficulty,time:$time){
            user
        }

    }
`;


export function EndGameModal() {

    const solved = useSelector(isSolved);
    const dispatch = useDispatch();
    const [inputValue, setInput] = useState('');

    const show = useSelector(isShow);
    const autosolution = useSelector(isAuto);


    const [addTodo] = useMutation(ADD_TODO);


    const handleClose = () => {


        addTodo({
            variables: {
                user: inputValue,
                // @ts-ignore
                difficulty: store.getState().value.difficulty,
                // @ts-ignore
                time: store.getState().value.time
            }
        }).then(() => {
            clientQuery();
            localStorage.setItem('time', JSON.stringify(0));
            dispatch({type: UPDATE_TIME, value: 0})
            dispatch({type: CHANGE_SHOW, value: false});
            // dispatch({type: CHANGE_IS_SOLVED, value: false});
            saveState();
        });


    }

    // @ts-ignore
    const time: number = store.getState().value.time;

    // @ts-ignore
    return (
        <>
            <Modal show={show && solved && !autosolution} keyboard={false} cenetered>
                <Modal.Header>
                    <Modal.Title>You solved it !</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>Your time : {format(Math.floor(time / 60)) + ":" + format(time % 60)}</p>
                    <form noValidate autoComplete="off">
                        <TextField id="outlined-basic" label="Name" variant="outlined" onChange={(event => {
                            setInput(event.target.value);
                        })}/>
                    </form>
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="primary" onClick={handleClose} disabled={!inputValue.trim()}>
                        Save
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
};