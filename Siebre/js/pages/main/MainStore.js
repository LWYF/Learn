/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

 import React from 'react';
 import {connect} from 'react-redux';
 import {bindActionCreators} from 'redux';
 import {Button, Text} from 'react-native';
 import MainView from './MainView';
 import * as homeActions from '../../actions/homeAction';

 class MainStore extends React.Component {
     static navigationOptions = ({navigation}) => ({
         headerTitle: '首页',
         headerLeft: <Button
             onPress={() => {
                navigation.state.params.clickHeaderLeft();
             }}
             title='左侧'
         />,
         headerStyle: {
             backgroundColor: 'orange'
         }
     });

     render() {
         return <MainView {...this.props} />;
     }
 }

 const mapStateToProps = (state) => {
     const {mainStore} = state;
     return {mainStore};
 };

 const mapDispatchToProps = (dispatch) => {
     const homeAction = bindActionCreators(homeActions, dispatch);
     return {homeAction};
 };

 export default connect(mapStateToProps,mapDispatchToProps)(MainStore);