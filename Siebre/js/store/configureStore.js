'use strict';
//applyMiddleware:将所有中间组件组成一个数组，依次执行
import {applyMiddleware, createStore} from 'redux';
//saga:redux的一个中间件，主要处理react架构总的异步处理工作，采用监听的形式工作
// import createSagaMiddelware, {END} from 'redux-saga';
import rootReducer from '../reducer/rootReducer';

const {logger} = require('redux-logger');
const middlewares = [];
// const sagaMiddleware = createSagaMiddelware();
// middlewares.push(sagaMiddleware);
//辨别浏览器的类型
if (__DEV__) {
    middlewares.push(logger);
}
const appStore = applyMiddleware(...middlewares)(createStore);

export default function configureStore(initialState) {
    console.disableYellowBox = true;
    const store = appStore(rootReducer, initialState);
    // store.runSaga = sagaMiddleware.run;
    // store.close = () => store.dispatch(END);
    return store;
}