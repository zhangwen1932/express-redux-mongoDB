import { put, take, call } from 'redux-saga/effects';
import { get } from '../fetch/fetch';

import { actionsTypes as AdminSettingTypes } from '../reducers/adminSetting';
import { actionsTypes as IndexActionTypes } from '../reducers';

export function* getAuthor() {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(get, 'admin/user/authorInfo');
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* getAuthorFlow() {
  while (true) {
    yield take(AdminSettingTypes.GET_AUTHOR);
    const res = yield call(getAuthor);
    if (res) {
      if (res.code === 0) {
        console.log('res.data', res.data);
        yield put({ type: AdminSettingTypes.RESPONSE_GET_AUTHOR, data: res.data });
      }
    }
  }
}
