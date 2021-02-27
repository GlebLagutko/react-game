import React from "react";
import {Store} from 'redux'
import {useDispatch} from 'react-redux'
import store, {saveState} from "../store";
import {BUTTON_INPUT} from "../store/actions/ButtonInput";
import {CHANGE_AUTO_SOLUTION} from "../store/actions/ChangeAutoSolution";
import {START_GAME} from "../store/actions/StartGame";
import {UPDATE_TIME} from "../store/actions/UpdateTime";
import {CHANGE_IS_SOLVED} from "../store/actions/ChangeIsSolved";
import {CHANGE_SHOW} from "../store/actions/ChangeEnableToShowModal";
import {START_TIMER} from "../store/actions/StartTimer";

export function ButtonAutoSolution() {

    const dispatch = useDispatch();

    return (<button type="button" className="btn btn-outline-secondary py-3 btn-fn" onClick={() => {

            dispatch({type: CHANGE_AUTO_SOLUTION, value: true});
            saveState();
        }}>Auto solution
        </button>
    )
}