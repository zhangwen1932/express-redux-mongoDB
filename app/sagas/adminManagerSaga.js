
import { put, take, call } from 'redux-saga/effects';
import { post } from '../fetch/fetch';

import { actionsTypes as IndexActionTypes } from '../reducers';

export function* login(username, password) {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(post, '/login', { username, password });
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '用户名或密码错误', msgType: 0 });
    return console.log('用户名或密码错误');
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* loginFlow() {
  while (true) {
    const request = yield take(IndexActionTypes.LOGIN);
    const response = yield call(login, request.username, request.password);
    if (response && response.code === 0) {
      console.log('登陆成功');
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '登录成功!', msgType: 1 });
    }
  }
}
