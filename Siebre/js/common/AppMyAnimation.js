/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import {LayoutAnimation} from 'react-native';

export const CommonLayoutAnimation = () => {
    const customAnimation = {
        duration: 800,
        create: {
            type: LayoutAnimation.Types.linear,
            property: LayoutAnimation.Properties.opacity
        },
        update: {
            type: LayoutAnimation.Types.easeInEaseOut
        }
    };
    return customAnimation;
};