'use strict';

import React from 'react';
import {StyleSheet, View, Text} from 'react-native';

class FeedBack extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '建议',
    });
    render () {
        return (
            <View style={styles.container}></View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});

export default FeedBack;