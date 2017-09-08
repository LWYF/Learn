'use strict';

import {StackNavigator, TabNavigator, DrawerNavigator} from 'react-navigation';
import MainView from './page/Main/Main';
import FeedBackView from './page/FeedBack/FeedBack';
import CategoryView from './page/Category/Category';
import AboutView from './page/About/About';
import WebView from './page/Web/Web';
import LanchView from './page/Lanch/Lanch';


const TabContainer = TabNavigator(
    {
        TabMain: {screen: MainView},
        TabCategory: {screen: CategoryView},
        TabFeedBack: {screen: FeedBackView},
        TabAbout: {screen: AboutView}
    },
    {
        lazy: true,
        tabBarPosition: 'bottom',
        tabBarOptions: {
            //选中状态下的字体颜色
            activeTintColor: 'blue',
            //未选中的字体颜色
            inactiveTintColor: 'yellow',
            showIcon: false,
            style: {
                //标签栏背景色
                backgroundColor: 'orange'
            },
            indicatorStyle: {
                opacity: 0
            },
            tabStyle: {
                padding: 0
            }
        }
    }
);

const ReactApp = StackNavigator(
    {
        NavLanch: {screen: LanchView},
        NavHome: {
            screen: TabContainer,
            navigationOptions: {
                headerLeft: null,
            }
        },
        NavCategory: {
            screen: CategoryView,
            navigationOptions: {
                headerLeft: null,
            }
        },
        NavWeb: {screen: WebView}
    },
    {
        headerMode: 'screen',
        navigationOptions: {
            headerStyle: {
                backgroundColor: '#3e9ce9'
            },
            headerTitleStyle: {
                color: '#fff',
                fontSize: 20
            },
            headerTintColor: 'black'
        }
    }
);

export default ReactApp;