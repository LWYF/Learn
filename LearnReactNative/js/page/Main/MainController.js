'use strict';

import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';

class MainController extends React.Component {

    render () {
        return (
           <View style={styles.container} />
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'red'
    },
});

export default MainController;