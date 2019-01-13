/* eslint-disable import/prefer-default-export */
import { take, call } from 'redux-saga/effects';
import { post } from '../fetch/fetch';
import { actionsTypes as TestActionTypes } from '../reducers';

// eslint-disable-next-line consistent-return
export function* sendInfo(testData) {
  yield call(post, '/test', { testData });
}

export function* sendInfoFlow() {
  while (true) {
    const request = yield take(TestActionTypes.SEND_INFO);
    yield call(sendInfo, request.testData);
  }
}
