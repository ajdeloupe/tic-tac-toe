import {initialState} from './initialState';
import * as types from '../actions/actionTypes';

export default function reducer(state = initialState, action) {
    switch (action.type) {
        case types.ACTION_TYPE:
            return Object.assign({}, state);
        default:
        return state;
    }
    
}
