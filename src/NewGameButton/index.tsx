import React from "react";
import {Store} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import store, {saveState} from "../store";
import {BUTTON_INPUT} from "../store/actions/ButtonInput";
import {START_GAME} from "../store/actions/StartGame";
import {UPDATE_TIME} from "../store/actions/UpdateTime";
import {CHANGE_IS_SOLVED} from "../store/actions/ChangeIsSolved";
import {CHANGE_SHOW} from "../store/actions/ChangeEnableToShowModal";
import {START_TIMER} from "../store/actions/StartTimer";
import {CHANGE_AUTO_SOLUTION} from "../store/actions/ChangeAutoSolution";


export function NewGameButton({}) {

    const dispatch = useDispatch();


    return (<button type="button" className="w-100 btn btn-outline-primary"
                    onClick={() => {


                        dispatch({type: CHANGE_AUTO_SOLUTION, value: false});

                        setTimeout(() => {
                            dispatch({type: START_GAME, value: false});
                            dispatch({type: UPDATE_TIME, value: 0});
                            dispatch({type: CHANGE_IS_SOLVED, value: false});
                            dispatch({type: CHANGE_SHOW, value: true});
                            dispatch({type: START_TIMER, value: false});

                            saveState();
                        }, 100)
                    }}>New Game</button>
    )
}