import React from "react";
import {Store} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import store, {saveState} from "../store";
import {BUTTON_INPUT} from "../store/actions/ButtonInput";
import {CHANGE_AUTO_SOLUTION} from "../store/actions/ChangeAutoSolution";
import {START_GAME} from "../store/actions/StartGame";
import {UPDATE_TIME} from "../store/actions/UpdateTime";
import {CHANGE_IS_SOLVED} from "../store/actions/ChangeIsSolved";
import {CHANGE_SHOW} from "../store/actions/ChangeEnableToShowModal";
import {START_TIMER} from "../store/actions/StartTimer";


const isAuto = state => state.value.autoSolution;

export function ButtonAutoSolution() {


    const autosolution = useSelector(isAuto);

    const dispatch = useDispatch();

    return (<button type="button" className="btn btn-outline-secondary py-3 btn-fn" onClick={() => {
            dispatch({type: START_GAME, value: false});
            dispatch({type: UPDATE_TIME, value: 0});
            dispatch({type: CHANGE_IS_SOLVED, value: false});
            dispatch({type: CHANGE_SHOW, value: true});
            dispatch({type: CHANGE_AUTO_SOLUTION, value: true});
            dispatch({type: START_TIMER, value: false});
            saveState();
        }} style={{backgroundColor: autosolution ? '#6c757d' : "", color: autosolution ? "white" : ''}}> Auto play
        </button>
    )
}