/**
 * lwyf
 * https://github.com/LWYF/Learn
 */


'use strict';

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    LayoutAnimation,
    Text
} from 'react-native';

import AppURL from '../../common/AppURL';
import AppPixel from '../../common/AppPixel';
import AppAnimation from '../../common/AppMyAnimation';
import AppLoading from '../../common/AppLoading';
import ToastUtil from '../../utils/ToastUtil';
import LeftView from "../left/LeftView";

let leftViewX = -0.7 * AppPixel.size.width - 10;

class MainView extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            canGoBack: false,
            showLeft: false,
            url: AppURL.pathHomeURL()
        }
    };

    updatePostion() {

    };

    componentDidMount() {
        this.props.navigation.setParams({clickHeaderLeft: this.onClickLeftBtn});
    };

    onClickLeftBtn = () => {
        this.setState({
            showLeft: true
        });

    };

    onOpenLeft = () => {
        this.props.navigation.navigate('DrawerOpen');
    };

    onNavStateChange = (navState) => {
        this.setState({
            title: navState.title,
            canGoBack: navState.canGoBack
        })
    };
    onLoading = () => {
      <AppLoading />
    };

    onLoadFail = () => {
        ToastUtil.showShort('加载失败');
    };

    onLoadSuccess = () => {
        // ToastUtil.showShort('加载成功');

        const {navigate} = this.props.navigation;
        console.log(this.webView.title);
    };

    onGetSkipURL = () => {
        const shouldStartLoad = true;
        return shouldStartLoad;
    };

    render () {
        const {params} = this.props.navigation.state;
        console.log(params);
        return (
            <View style={styles.container}>
                {this.state.showLeft
                    ?this.onOpenLeft()
                    :<View><Text>asdfasfasdfasdfasdfasdfasdfasdfasfdajsfoasnfoasnfaosnfoanfoafnas</Text></View>
                }
            </View>
        );
    }
}


const styles = StyleSheet.create({
    container: {
        width: AppPixel.size.width,
        height: AppPixel.size.height
    },
});

export default MainView;
