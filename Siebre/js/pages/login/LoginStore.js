/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import React from 'react';
import LoginView from './LoginView';

class LoginStore extends React.Component {
    static navigationOptions = {
        title: '登录',

    };

    render() {
        return <LoginView {...this.props} />;
    }
}

export default LoginStore;