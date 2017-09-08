'use strict';

import React from 'react';
import {Dimensions, Animated, StyleSheet ,Image} from 'react-native';
import NavigationUtil from '../../utils/NavigationUtil';
import store from 'react-native-simple-store';
const startImg = require('../../img/lanchImage.png');
const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;

class Lanch extends React.Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

    componentDidMount() {
        const {navigate} = this.props.navigation;
        // Animated.timing(this.state.bounceValue, {
        //     toValue: 1.2,
        //     duration: 1000
        // }).start();
        this.timer = setTimeout(() => {
            store.get('isInit').then((isInit) => {
                if (!isInit) {
                    navigate('NavCategory', {isFirst: true});
                } else {
                    NavigationUtil.reset(this.props.navigation, 'NavHome');
                }
            });
            navigate('NavCategory', {isFirst: true});
        }, 1000);
    }

    componentWillUnmount() {
        clearTimeout(this.timer);
    }

    render () {
        return (
            <Image style={styles.container} source={startImg}/>
            // <Animated.Image style={{width:screenWidth, height: screenHeight, transform: [{scale: this.state.bounceValue}]
            // }} source={startImg}/>
        );
    }
}

const styles = StyleSheet.create({
    constainer: {
        resizeMode: 'contain',
        flex: 1,
        width: screenWidth,
        height: screenHeight
    }
});
export default Lanch;