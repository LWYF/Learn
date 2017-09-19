/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import React from 'react';
import {StyleSheet, View, Text, ActivityIndicator} from 'react-native';

const AppLoading = () => (
    <View style={styles.loading}>
        <ActivityIndicator size="large" color="#3e9ce9"/>
        <Text style={styles.loadingText}>数据加载中...</Text>
    </View>
);

const styles = StyleSheet.create({
    loading: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white'
    },
    loadingText: {
        marginTop: 10,
        textAlign: 'center'
    }
});

export default AppLoading;