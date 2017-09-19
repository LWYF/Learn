/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {DrawerNavigator, StackNavigator} from 'react-navigation';
import {
  AppRegistry,
  StyleSheet,
  Button,
  View
} from 'react-native';


class MyHomeScreen extends React.Component {
    static navigationOptions = ({navigation}) => {
        return {
            title: 'Home',
            headerLeft: <Button title="我的" onPress={() => navigation.navigate('DrawerOpen')}/>
        };
    };

    render() {
        return (
            <Button
                onPress={() => this.props.navigation.navigate('Notifications')}
                title="Go to notifications"
            />
        );
    }
}

class MyNotificationsScreen extends React.Component {
    static navigationOptions = {
        drawerLabel: 'Notifications'
    };

    render() {
        return (
            <View style={styles.base}>
            <Button
                onPress={() => this.props.navigation.goBack()}
                title="Go back home"
            />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    icon: {
        width: 24,
        height: 24,
    },
    base: {
        flex: 1,
        backgroundColor: 'yellow'
    }
});
const StackNav = StackNavigator(
    {
        NavHome: {screen: MyApp},
        NavNoti: {screen: MyNotificationsScreen}
    }
);

const MyApp = DrawerNavigator(
    {
    Home: {
        screen: StackNav,
    },
    Notifications: {
        screen: MyNotificationsScreen,
    },
    },
    {
        drawerWidth: 300,
        drawerPosition: 'left'
    }
);



AppRegistry.registerComponent('TestNavigator', () => MyApp);
