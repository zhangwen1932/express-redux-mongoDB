/* eslint-disable import/prefer-default-export */
import { take, call } from 'redux-saga/effects';
import { post } from '../fetch/fetch';
import { actionsTypes as TestActionTypes } from '../reducers';

// eslint-disable-next-line consistent-return
export function* sendInfo(testdata) {
  console.log('我是saga里面的TestActionTypes,应该按钮触发后才显示', TestActionTypes.SEND_INFO);
  yield call(post, '/test', { testdata });
}

export function* sendInfoFlow() {
  while (true) {
    const request = yield take(TestActionTypes.SEND_INFO);
    console.log('request.data', request.data);
    yield call(sendInfo, request.data);
  }
}
