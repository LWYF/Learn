/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware, {END} from 'redux-saga';
import rootReducer from '../reducer/rootReducer';

const {logger} = require('redux-logger');
const middleWare = [];
const sagaMiddleWare = createSagaMiddleware();
middleWare.push(sagaMiddleWare);

if (__DEV__) {
    middleWare.push(logger);
}

const appStoreMiddleware = applyMiddleware(...middleWare)(createStore);

export default function configureStore(initialState) {
    console.disableYellowBox = true;
    const store = appStoreMiddleware(rootReducer, initialState);
    // store.runSaga = sagaMiddleWare.run;
    // store.close = () => store.dispatch(END);
    return store;
}