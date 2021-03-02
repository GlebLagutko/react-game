import React from "react";
import {Store} from 'redux'
import {useDispatch} from 'react-redux'
import store, {saveState} from "../store";
import {BUTTON_INPUT} from "../store/actions/ButtonInput";
import {SET_SOUND_PLAY} from "../store/actions/SetSoundPlay";

export interface ButtonNumberProps {
    clickHandler(value: number): void;

    value: number;
}

export function ButtonNumber({clickHandler, value}: ButtonNumberProps) {

    const dispatch = useDispatch();

    return (<button type="button" className="btn btn-outline-secondary py-3 btn-num"
                    onClick={() => {
                        // @ts-ignore
                        dispatch({type: SET_SOUND_PLAY, value: true});
                        dispatch({type: BUTTON_INPUT, value: value});
                        saveState();

                    }} onKeyPress={() => {
    }}>{value}
    </button>)
}