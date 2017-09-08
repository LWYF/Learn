#### 简单例子

```
	import { takeEvery } from 'redux-saga'
	import { put } from 'redux-saga/effects'
	
	// 一个工具函数：返回一个 Promise，这个 Promise 将在 1 秒后 resolve
	export const delay = ms => new Promise(resolve => setTimeout(resolve, ms))
	
	// Our worker Saga: 将异步执行 increment 任务
	export function* incrementAsync() {
	  yield delay(1000)
	  yield put({ type: 'INCREMENT' })
	}
	
	// Our watcher Saga: 在每个 INCREMENT_ASYNC action 调用后，派生一个新的 incrementAsync 任务
	export function* watchIncrementAsync() {
	  yield* takeEvery('INCREMENT_ASYNC', incrementAsync)
	}
```
创建工具函数delay,用于返回一个延迟1秒再resolve的Promise.将使用这个函数去阻塞Generator

生成器函数，Saga yield对象到redux-saga middleware。被yield对象都是一类指令，指令可被middleware解释执行。当middleware取得一个yield后的Promise，middleware会暂停Saga,知道Promise完成

一旦Promise被resolve,middleware会恢复Saga去执行下一个语句，直到下一个yield

incrementAsync,通过delay延迟了1秒钟，发起了INCREMENT的action


#### 让代码可测试
建立文件saga.spec.js

```
	import test from 'tape';
	
	import { incrementAsync } from './sagas'
	
	test('incrementAsync Saga test', (assert) => {
	  const gen = incrementAsync()
	
	  // now what ?
	});
```
由于 incrementAsync 是一个 Generator 函数，当我们在 middleware 之外运行它，每次调用 generator 的 next，你将得到一个以下结构的对象：

```
	gen.next() // => { done: boolean, value: any }
```



#### takeEvery

```
	import { takeEvery } from 'redux-saga'
	
	function* watchFetchData() {
	  yield* takeEvery('FETCH_REQUESTED', fetchData)
	}
```
允许多个fetchData实例同时启动。在某个特定时刻，可以启动一个新的fetchData任务，尽管之前还有一个或多个fetchData尚未结束


#### takeLatest

```
	import { takeLatest } from 'redux-saga'
	
	function* watchFetchData() {
	  yield* takeLatest('FETCH_REQUESTED', fetchData)
	}
```
在任何时刻 takeLatest 只允许执行一个 fetchData 任务。并且这个任务是最后被启动的那个。 如果之前已经有一个任务在执行，那之前的这个任务会自动被取消


### Effects
Effect是一个简单的对象，这个对象包含了一些给middleware解释执行的信息


