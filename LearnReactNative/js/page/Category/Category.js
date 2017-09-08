'use strict';

import React from 'react';
import {connect} from 'react-redux';
/**
 * bindActionCreators，通过dispatch将action包裹起来，这样可以通过bindActionCreators创建的方法，
 * 直接调用dispatch(action)(隐式调用)
 * 用处: 一般情况下，可以通过Provider将store通过React的connext属性向下传递，bindActionCreators的唯一用处就是
 * 需要传递action creater到子组件，并且改子组件并没有接收到父组件上传递的store和dispatch.
 * */

import {bindActionCreators} from 'redux';
import CategoryController from './CategoryController';
import * as categoryCreators from '../../actions/category';

class Category extends React.Component {
    static navigationOptions = ({navigation}) => ({
        title: '分类',
    });
    render () {
        return (
            <CategoryController {...this.props}/>
        );
    }
}

const mapStateToProps = (state) => {
    const { category } = state;
    return {
        category
    };
};

const mapDispatchToProps = (dispatch => {
    const categoryAction = bindActionCreators(categoryCreators, dispatch);
    return {categoryAction};
});



//connect,将传入的组件(UI)组件作为connect的子组件return出去
export default connect(mapStateToProps, mapDispatchToProps)(Category);

