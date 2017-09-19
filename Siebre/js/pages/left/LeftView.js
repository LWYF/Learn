/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import React, {Component} from 'react';

import {
    View,
    StyleSheet,
    Image,
    FlatList,
    Text,
    TouchableOpacity
} from 'react-native';
import AppPixel from '../../common/AppPixel';


const MenuItems = [
    { title: "订单管理", icon: require('../../resource/img/leftImg/orderManager.png')},
    { title: "消息", icon: require('../../resource/img/leftImg/messageIcon.png')},
    { title: "保单管理", icon: require('../../resource/img/leftImg/policyManager.png')},
    { title: "我的收藏", icon: require('../../resource/img/leftImg/myStore.png')},
    { title: "内容资讯", icon: require('../../resource/img/leftImg/contentInfo.png')},
    { title: "销售统计 ", icon: require('../../resource/img/leftImg/saleStatisticsIcon.png')},
    { title: "排行榜", icon: require('../../resource/img/leftImg/rankingList.png')},
    { title: "常见问题", icon: require('../../resource/img/leftImg/commonProblemIcon.png')},
    { title: "设置", icon: require('../../resource/img/leftImg/settingIcon.png')}
];

class LeftView extends React.Component {

    onRenderItem = (info) => {
        var txt = info.item.title;
        return (
            <View style={styles.itemSize}>
                <Image style={styles.itemImg} source={info.item.icon}/>
                <Text style={styles.itemText}>{txt}</Text>
            </View>
        );
    };
    onSeparatorLine = () => {
        return <View style={styles.line}></View>

    };
    onSectionHeader = ({section}) => (
        <View style={styles.userInfo}>
            <Image source={require('../../resource/img/leftImg/leftMenuBack.png')}/>
        </View>
    );

    render () {
        var data = [];
        for (var i = 0; i < 100; i++) {
            data.push({key: i, title: i + ''});
        }
        return (
            <View style={styles.base}>
                <FlatList
                    renderItem={this.onRenderItem}
                    ListHeaderComponent={this.onSectionHeader}
                    ItemSeparatorComponent={this.onSeparatorLine}
                    numColumns={2}
                    data={MenuItems}
                />
            </View>

        );
    }
}

const userInfoHeight = AppPixel.size.width * AppPixel.leftScale / 2;
const userInfoWidth = AppPixel.size.width * AppPixel.leftScale;

const styles = StyleSheet.create({
    base: {
        flex: 1
    },
    userInfo: {
        height: userInfoHeight,
        width: userInfoWidth,
        marginTop: 0
    },
    itemSize: {
        backgroundColor: 'yellow',
        justifyContent: 'center',
        borderLeftWidth: 0.5,
        borderLeftColor: 'red',
        alignItems: 'center',
        width: (userInfoWidth - 1) / 2,
        height: (AppPixel.size.height - userInfoHeight - 1) / (Math.round(MenuItems.length / 2))
    },
    itemText: {
        top: 10
    },
    itemImg: {
        height: 31,
        width: 31
    },
    line: {
       height: 0.5,
       backgroundColor: 'red'
    }
});

export default LeftView;