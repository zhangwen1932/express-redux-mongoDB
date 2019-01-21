
import { take, call } from 'redux-saga/effects';
import { post } from '../fetch/fetch';

import { actionsTypes as IndexActionTypes } from '../reducers';

export function* login(username, password) {
  yield call(post, '/login', { username, password });
}

export function* loginFlow() {
  while (true) {
    const request = yield take(IndexActionTypes.LOGIN);
    console.log('request', request);
    const response = yield call(login, request.username, request.password);
    if (response && response.code === 0) {
      console.log('失败');
    }
    console.log('成功');
  }
}
