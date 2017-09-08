// 'use strict';
//
// import React from 'react';
// import {connect} from 'react-redux';
// import {bindActionCreators} from 'redux';
// import MainController from './MainController';
// import * as readCreator from '../../actions/category';
//
// class Main extends React.Component {
//     static navigationOptions = {
//       title: '首页'
//     };
//
//     render () {
//         return (
//             <MainController {...this.props}/>
//         );
//     }
// }
//
// const mapStateToProps = (state) => {
//     const { read } = state;
//     return {
//         read
//     };
// };
//
// const mapDispatchToProps = (dispatch => {
//    const readAction = bindActionCreators(readCreator, dispatch);
//    return {readAction};
// });
//
// //connect,将传入的组件(UI)组件作为connect的子组件return出去
// export default connect(mapStateToProps, mapDispatchToProps)(Main);



import React, {PropTypes} from 'react';
import {View, StyleSheet} from 'react-native';

class Main extends React.Component {
    static navigationOptons = ({
        title: '首页'
    });
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

export default Main;