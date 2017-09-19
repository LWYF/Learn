/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import {StackNavigator} from 'react-navigation';

import Main from './MainStore';

const StackMain = StackNavigator (
    {
        NavHome: {screen: Main}
    }
);

export default StackMain;