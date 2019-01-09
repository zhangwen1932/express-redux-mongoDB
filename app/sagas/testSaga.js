/* eslint-disable import/prefer-default-export */
import { call } from 'redux-saga/effects';
import { post } from '../fetch/fetch';

export function* sendInfo(data) {
  console.log('data', data);
  yield call(post, '/test', { data });
}
