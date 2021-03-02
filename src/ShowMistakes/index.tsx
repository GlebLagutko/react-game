import React from "react";
import {Store} from 'redux'
import {useDispatch, useSelector} from 'react-redux'
import {CHANGE_HINT} from "../store/actions/ChangeHint";
import store, {saveState} from "../store";
import {TextFields} from "@material-ui/icons";
import {TextField} from "@material-ui/core";

const isChecked = state => state.value.hint;

export function ShowMistakes() {

    const dispatch = useDispatch();
    let checked = useSelector(isChecked);

    return (
        <div>
            <input onClick={() => {

                // @ts-ignore
                dispatch({type: CHANGE_HINT, value: !checked});
                saveState();
            }}
                   className="form-check-input" type="checkbox" checked={checked}
                   id="flexCheckDefault"/>
            <div className="form-check-label">
                Show mistakes
            </div>
        </div>
    )

}