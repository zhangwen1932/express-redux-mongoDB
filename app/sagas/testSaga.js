/* eslint-disable consistent-return */
import { put, call } from 'redux-saga/effects';
import { post } from '../fetch/fetch';
import { actionsTypes as IndexActionTypes } from '../reducers';

// eslint-disable-next-line import/prefer-default-export
export function* sendInfo(data) {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(post, '/', { data });
  } catch (error) {
    yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '信息错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}
