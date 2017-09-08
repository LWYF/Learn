'use strict';

/**
 * Fork:执行一个非阻塞操作
 * Take:暂停并等待action到达
 * Race:同步执行多个effect,一旦有一个完成，取消其他effect
 * Call:调用一个函数，如果这个函数返回一个Promise，那么它会阻塞saga，直到promise成功被处理
 * Put:触发一个Action
 * Select启动一个选择函数，从State中获取数据
 * takeLatest意味着我们将执行所有操作，然后返回最后一个调用的结果，如果我们触发了多个时间，它只关注最后一个返回结果
 * takeEvery:返回所有已出发的调用的结果
 * */
import {put, take, call, fork} from 'redux-saga/effects';
import * as types from '../actions/types';
import ToastUtil from '../utils/ToastUtil';
import {request} from '../utils/RequestUtil';
import {WEXIN_ARTICLE_TYPE} from "../actions/url";
import {fetchTypeList, receiveTypeList} from "../actions/category";

export function* requestTypeList() {
    try {
        yield put(fetchTypeList());
        const typeList = yield call(request, WEXIN_ARTICLE_TYPE, 'get');
        yield put(receiveTypeList(typeList.showapi_res_body.typeList));
        const errorMessage = typeList.showapi_res_error;
        if (errorMessage && errorMessage !== '') {
            yield ToastUtil.showShort(errorMessage);
        }
    } catch (error) {
        console.log(error);
        yield put(receiveTypeList([]));
        yield ToastUtil.showShort('网络发生错误，请重试');
    }
}

export function* watchRequestTypeList() {
    while (true) {
        yield take(types.REQUEST_TYPE_LIST);
        //任务会在后台启动，调用者可以继续它自己的流程，而不用等待被fork的任务结束
        yield fork(requestTypeList);
    }
}