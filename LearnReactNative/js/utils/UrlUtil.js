'use strict';

/*
* `string`是模板字符串，${var}是变量的占位符
* */
const getUrl = (url) => {
  if (url.indexOf('?') === -1) {
      return `${url}?showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f`;
  }
  return `${url}&showapi_appid=29400&showapi_sign=e7977541307547beab3e4aa033adb78f`;
};

export default getUrl;