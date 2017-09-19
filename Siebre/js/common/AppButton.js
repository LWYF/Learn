/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import React from 'react';
import PropTypes from 'prop-types';
import {
    View,
    Text,
    TouchableOpacity
} from 'react-native';

const propTypes = {
    onPress: PropTypes.func,
    disabled: PropTypes.bool,
    style: Text.propTypes.style,
    containerStyle: View.propTypes.style,
    text: PropTypes.string,
    activeOpacity: PropTypes.number
};

const AppButton = ({
    onPress,
    disabled,
    style,
    containerStyle,
    text
}) => (
    <TouchableOpacity
        style={containerStyle}
        disabled={disabled}
        onPress={onPress}
        activeOpacity={activeOpacity}
    >
        <Text style={style}>{text}</Text>
    </TouchableOpacity>
);

AppButton.propTypes = propTypes;

AppButton.defaultProps = {
    onPress() {},
    disabled: false,
    activeOpacity: 0.8
};

export default AppButton;