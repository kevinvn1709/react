import {FETCH_POST} from './action';

const INITIAL_STATE = {all: [], post: null};

export default function (state = INITIAL_STATE, action) {
    switch (action.type) {
        case FETCH_POST:
            return {...state, all: action.payload.data}
        default:
            return state;
    }
}