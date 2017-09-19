/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import * as types from '../actions/types';

const initialState = {
  isLoggedIn: false
};

export default function user(state = initialState, action) {
    switch (action.type) {

        case types.LOGGED_IN:
            return Object.assign({}, state, {
                isLoggedIn: true
            })
        default:
            return state;
    }
}