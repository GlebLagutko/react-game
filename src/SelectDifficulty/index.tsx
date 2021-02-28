import * as React from "react";
import {Context, createContext, useContext} from "react";

import {useSelector, useDispatch} from 'react-redux'
import {CHANGE_DIFFICULTY} from "../store/actions/ChangeDifficulty";
import {START_GAME} from "../store/actions/StartGame";
import {saveState} from "../store";
import {UPDATE_TIME} from "../store/actions/UpdateTime";
import {CHANGE_IS_SOLVED} from "../store/actions/ChangeIsSolved";
import {CHANGE_SHOW} from "../store/actions/ChangeEnableToShowModal";
import {START_TIMER} from "../store/actions/StartTimer";
import {CHANGE_AUTO_SOLUTION} from "../store/actions/ChangeAutoSolution";

const difficultyState = state => state.value.difficulty;

export function SelectDifficulty() {
    const dispatch = useDispatch();
    const difficulty: string = useSelector(difficultyState);

    const changeDifficulty = (difficulty: String) => {


        dispatch({type: CHANGE_AUTO_SOLUTION, value: false});

        setTimeout(() => {
            dispatch({type: START_GAME, value: false});
            dispatch({type: CHANGE_DIFFICULTY, value: difficulty});
            dispatch({type: UPDATE_TIME, value: 0});
            dispatch({type: CHANGE_IS_SOLVED, value: false});
            dispatch({type: CHANGE_SHOW, value: true});

            dispatch({type: START_TIMER, value: false});
            saveState();
        }, 100)
    };

    return (<div>
            <div className="col-md-4">
                <span className="float-left pr-2 align-middle">Difficulty:</span><br></br>
                <div className="dropdown show float-left">
                    <a className="btn btn-secondary dropdown-toggle" href="#" role="button"
                       id="dropdownMenuLink" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        {difficulty}
                    </a>
                    <div className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                        <a onClick={() => {
                            changeDifficulty("EASY");
                        }} className="dropdown-item"
                           href="#">Easy</a>
                        <a onClick={() => {
                            changeDifficulty("MEDIUM");
                        }}
                           className="dropdown-item" href="#">Medium</a>
                        <a onClick={() => {
                            changeDifficulty("HARD");
                        }} className="dropdown-item"
                           href="#">Hard</a>
                    </div>
                </div>
            </div>
            <div className="col-md-4">
            </div>
            <div className="col-md-4">
            </div>
        </div>
    );
}