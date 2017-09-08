'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
import ReactApp from './Siebre';
// import rootSaga from './sagas/rootSaga';

const appStore = configureStore();

// appStore.runSaga(rootSaga);

const Root = ()=> (
    <Provider store={appStore}>
        <ReactApp />
    </Provider>
);

export default Root;