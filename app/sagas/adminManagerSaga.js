
import { put, take, call } from 'redux-saga/effects';
import { get, post } from '../fetch/fetch';

import { actionsTypes as IndexActionTypes } from '../reducers';

export function* login(username, password) {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(post, '/login', { username, password });
  } catch (error) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '服务器错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* loginFlow() {
  while (true) {
    const request = yield take(IndexActionTypes.LOGIN);
    const response = yield call(login, request.username, request.password);
    if (response && response.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '登录成功!', msgType: 1 });
      yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data });
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '用户名密码错误', msgType: 1 });
    }
    yield put({ type: IndexActionTypes.CLEAR_MESSAGE, msgCOntent: '', msgType: 1 });
  }
}

export function* userAuth() {
  while (true) {
    yield take(IndexActionTypes.USER_AUTH);
    try {
      yield put({ type: IndexActionTypes.FETCH_START });
      const response = yield call(get, '/userInfo');
      if (response && response.code === 0) {
        yield put({ type: IndexActionTypes.RESPONSE_USER_INFO, data: response.data });
      }
    } catch (err) {
      console.log(err);
    } finally {
      yield put({ type: IndexActionTypes.FETCH_END });
    }
  }
}
