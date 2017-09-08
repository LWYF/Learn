'use strict';

import React from 'react';

/**
 * InteractionManager将一些耗时较长的工作安排到所有互动或动画完成后再进行。这样可以保证JS动画的流畅运行
 * */
import {View, StyleSheet, Text, FlatList, Alert, RefreshControl} from 'react-native';
import PropTypes from 'prop-types';
import Button from '../../common/AppButton';
import store from 'react-native-simple-store';
import NavigationUtil from '../../utils/NavigationUtil';
import category from "../../reducer/category";
import ToastUtil from "../../utils/ToastUtil";

const propTypes = {
  categoryAction: PropTypes.object,
  category: PropTypes.object.isRequired
};

let tempTypeIds = [];
let maxSelectedType = 5; /*默认最多选5个类别*/

class CategoryController extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            typeIds: tempTypeIds
        };
    }

    componentWillMount() {
        // const {params} = this.props.navigation.state;
        // if (params == undefined || !params.isFirst) {
        //     console.log('已经选择过');
        // } else {
        //     console.log('未选择过');
        // }
    }

    componentDidMount() {
        const {categoryAction} = this.props;
        categoryAction.requestTypeList();
    }
    render () {
        const {params} = this.props.navigation.state;
        // if (  params.isFirst) {
            return (
                <View style={styles.container}>
                    <View style={styles.header}>
                        <Text style={[styles.btnText, {color: 'black', padding: 5, fontSize:18}]}>
                            初次见面，请选择感兴趣的1-5个类别
                        </Text>

                    </View>
                    {this.categoryFlat()}
                    <Button containerStyle={styles.confirmButton} style={styles.btnText} text={'确认'}
                            onPress={() => this.confirmEvent()} />
                </View>
            );
        // }

    }

    categoryFlat = () => {
        const {category} = this.props;
        return (
            <FlatList
                onRefresh={this.onRefresh}
                refreshing={false}
                style={styles.base}
                renderItem={this.renderItem}
                numColumns={3}
                data={Array.from(category.typeList)}
            >
            </FlatList>
        );
    }

    renderItem = (item) => {
        const isSelect = Array.from(this.state.typeIds).indexOf(parseInt(item.item.id)) !== -1;
        return (
            <Button
                key={item.item.id}
                containerStyle={[styles.categoryBtn, isSelect
                    ? {backgroundColor: '#3e9ce9'}
                    : {backgroundColor: '#fcfcfc'}
                ]}
                style={[styles.categoryText, isSelect ? {color: '#fcfcfc'} : {color: 'black'}]}
                text={item.item.name}
                onPress={() => this.selectedCategory(item)}
            />

        );
    }

    onRefresh = () => {
      const {categoryAction} = this.props;
        categoryAction.requestTypeList();
    };
    //点击确定按钮事件
    confirmEvent() {
        if (this.state.typeIds.length === 0) {
            Alert.alert('提示', '您未选择分类', [
                {text: '取消', style: 'cancel'},
                {
                    text: '确定',
                    onPress: () => {
                        store.save('typeIds', this.state.typeIds);
                        NavigationUtil.reset(this.props.navigation, 'NavHome');
                    }
                }
            ]);
        } else if (this.state.typeIds.length > maxSelectedType) {
            ToastUtil.showShort(`不要超过${maxSelectedType}个类别`);
        } else {
            store.save('typeIds', this.state.typeIds);
            store.save('isInit', true);
            NavigationUtil.reset(this.props.navigation, 'NavHome');
        }

    }

    //选择分类上的事件
    selectedCategory = (type) => {
        /**
         * indexOf(searchvalue, fromIndex):返回某个指定字符串值在字符串中首次出现的位置
         * searchvalue:必传，规定需检索的字符串值
         * fromindex:可选，规定字符串中开始检索的位置
         * */
        const pos = tempTypeIds.indexOf(parseInt(type.item.id));
        if (pos === -1) {
            /**
             * push()
             * 数组元素的添加/插入
             * */
            tempTypeIds.push(parseInt(type.item.id));
        } else {
            /**
             * splice(index,howmany,item..)
             * index:必传，规定从何处添加/删除元素
             * howmany:必传，规定该删除多少元素，必须是数字，可以为0,未规定，则删除从index开始到原数组结尾的所有元素
             * item..，可选，要添加的元素
             * */
            tempTypeIds.splice(pos, 1);
        }
        this.setState({
            typeIds: tempTypeIds
        });
    };
}

const styles = StyleSheet.create({
    base: {
      flex: 1
    },
    container: {
        flex: 1,
        flexDirection: 'column',
        backgroundColor: '#fff'
    },
    categoryText: {
      fontSize: 16,
      textAlign: 'center'
    },
    categoryBtn: {
      flex: 1,
      marginLeft: 10,
      marginRight: 10,
      marginTop: 10,
      padding: 10,
      borderRadius: 10,
      borderWidth: 1,
      borderColor: '#dddddd'
    },
    header: {
      padding: 10,
      backgroundColor: '#fcfcfc'
    },
    girdLayout: {
      flex: 1,
      alignItems: 'center',
      backgroundColor: '#f2f2f2'
    },
    confirmButton: {
        margin: 10,
        padding: 10,
        borderRadius: 10,
        backgroundColor: '#3e9ce9'
    },
    btnText: {
      fontSize: 16,
      textAlign: 'center',
      color: '#fff'
    },
    another: {
        flex: 1,
        backgroundColor: 'yellow'
    },
});

CategoryController.propTypes = propTypes;

export default CategoryController;