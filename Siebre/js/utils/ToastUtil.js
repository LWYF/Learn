/**
 * lwyf
 * https://github.com/LWYF/Learn
 */

'use strict';

import {
    Alert,
    ToastAndroid,
    Platform
} from 'react-native';

const showShort = (content, isAlert) => {
  if (!content) {
      return;
  }
  if (isAlert || Platform.OS == 'ios') {
     Alert.alert('提示', content.toString());
  } else {
      ToastAndroid.show(content.toString(), ToastAndroid.SHORT);
  }
};

export default {
    showShort
};