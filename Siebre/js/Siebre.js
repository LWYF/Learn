/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';
import React from 'react';
import {StackNavigator, DrawerNavigator} from 'react-navigation';
import {ScrollView, View, Text} from 'react-native';

import MainStore from './pages/main/MainStore';
import NavMain from './pages/main/MainNav';
import LoginStore from './pages/login/LoginStore';
import LeftView from './pages/left/LeftView';
import AppPixel from './common/AppPixel';

const DrawerLeft = DrawerNavigator(
    {
        DrawLeft: {screen: LeftView},
        DrawHome:  {
            screen: NavMain
        }
    },
    {
        drawerWidth: AppPixel.size.width*AppPixel.leftScale,
        drawerPosition: 'left', //默认左边
        initialRouteName: 'DrawHome',
        contentComponent: props => <ScrollView scrollEnabled={false}><LeftView /></ScrollView>
    }
);


export default DrawerLeft;