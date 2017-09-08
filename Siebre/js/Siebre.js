'use strict';

import {StackNavigator, DrawerNavigator} from 'react-navigation';
// import LanchView from './pages/LanchView';
import LeftView from './pages/left/LeftView';
import MainView from './pages/main/MainView';

const SieBre = DrawerNavigator(
    {
      Main: {screen: MainView},
      Left: {screen: LeftView}
    },
    {
        drawerWidth: 250,  //抽屉宽
        drawerPosition: 'left', //抽屉的方向
        contentOptions: {
            initialRouteName: MainView, //默认页面
        }
    }
);

export default SieBre;