'use strict';


import {fork} from 'redux-saga/effects';
import {watchRequestTypeList} from './category';

/**
 * function*这种声明方式会定义一个生成器函数，返回一个Generator对象，生成器函数会在执行时能中途退出，后面又能重新进入继续执行。
 * 而且在函数内定义的变量的状态都会保留，不受中途退出的影响
 * 调用一个生成器函数并不会马上执行它里面的语句，而是返回一个这个生成器的迭代器(iterator)，当这个迭代器的next()方法被首次调用时，
 * 其内的语句会执行到第一个出现yield表达式位置，该表达式定义了迭代器要返回的值，或者被yield*委派至另一个生成器函数。
 * next()方法返回一个对象，这个对象包含两个属性:value和done,value属性表示本次yield表达式返回的值，done为布尔类型
 * 表示生成器是否已经产出了它最后的值，即生成器函数是否已经返回
 *
 * 调用next()方法时，如果传入了参数，那么这个参数会取代生成器函数中对应执行位置的yield表达式
 *
 * 当在生成器函数中显示return时，会导致生成器立即变为完成状态，即调用next()方法返回的对象的done为true.如果return了一个值，
 * 那么这个值会作为下次调用next()方法返回的value值
 *
 *
 * Sagas被实现为Generator函数，它yield对象到redux-saga middleware。被yield对象都是一类指令，指令可被middleware解释执行
 * 当middleware取得yield后的Promise,middleware会暂停Saga，直到Promist完成
 * */

export default function* rootSaga() {
    //fork一个任务，任务会在后台启动，调用者也可以继续它自己的流程，而不用等待被fork的任务结束
    yield [fork(watchRequestTypeList)];
}