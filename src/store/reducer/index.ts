import {BUTTON_INPUT} from '../actions/ButtonInput';
import {UPDATE_TIME} from "../actions/UpdateTime";
import {CHANGE_HINT} from "../actions/ChangeHint";
import {START_GAME} from "../actions/StartGame";
import {CHANGE_DIFFICULTY} from "../actions/ChangeDifficulty";
import {CHANGE_COLOR} from "../actions/ChangeColor";
import {CHANGE_IS_SOLVED} from "../actions/ChangeIsSolved";
import {CHANGE_SHOW} from "../actions/ChangeEnableToShowModal";
import {START_TIMER} from "../actions/StartTimer";
import {FETCH_COMPLETED} from "../actions/FetchCompleted";
import {CHANGE_AUTO_SOLUTION} from "../actions/ChangeAutoSolution";
import {SET_SOUND_VOLUME} from "../actions/SetVolume";
import {SET_SOUND_PLAY} from "../actions/SetSoundPlay";

const buttonReducer = (state = {}, action) => {
        switch (action.type) {
            case BUTTON_INPUT :
                return {...state, buttonInput: action.value};
            case UPDATE_TIME:
                return {...state, time: action.value};
            case CHANGE_HINT:
                return {...state, hint: action.value};
            case START_GAME:
                return {...state, started: action.value};
            case CHANGE_DIFFICULTY:
                return {...state, difficulty: action.value};
            case CHANGE_COLOR:
                return {...state, isSecondColor: action.value};
            case CHANGE_IS_SOLVED:
                return {...state, isSolved: action.value};
            case CHANGE_SHOW:
                return {...state, show: action.value};
            case START_TIMER:
                return {...state, startTimer: action.value};
            case CHANGE_AUTO_SOLUTION:
                return {...state, autoSolution: action.value};
            case SET_SOUND_VOLUME:
                return {...state, soundVolume: +action.value};
            case SET_SOUND_PLAY:
                return {...state, soundPlay: action.value};
            default :
                return state
        }

    }
;


const fetchReducer = (state = {}, action) => {
        switch (action.type) {
            case FETCH_COMPLETED :
                return {...state, list: action.value};
            default :
                return state
        }

    }
;
export {buttonReducer, fetchReducer};