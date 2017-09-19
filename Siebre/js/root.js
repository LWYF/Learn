/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './store/configureStore';
// import rootSagas from './sagas/rootSagas';
import Siebre from './Siebre';

const appStore = configureStore();
// appStore.runSaga(rootSagas);

const Root = () => (
    <Provider store={appStore}>
        <Siebre />
    </Provider>
);

export default Root;