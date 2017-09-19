/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import {combineReducers} from 'redux';

import useInfo from './userInfo';

const rootReducer = combineReducers({
    useInfo
});

export default rootReducer;