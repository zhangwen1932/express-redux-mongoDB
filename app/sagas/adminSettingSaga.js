import { put, take, call } from 'redux-saga/effects';
import { get, post } from '../fetch/fetch';

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
    if (res && res.code === 0) {
      yield put({ type: AdminSettingTypes.RESPONSE_GET_AUTHOR, data: res.data });
    }
  }
}

export function* updateInfo(values) {
  const {
    nickname, company, occupation, profile,
  } = values;
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(post, 'admin/user/updateUserInfor', {
      nickname, company, occupation, profile,
    });
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* updateInfoFlow() {
  while (true) {
    const request = yield take(AdminSettingTypes.UPDATE_INFO);
    const res = yield call(updateInfo, request.values);
    if (res && res.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '更新成功', msgType: 0 });
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '更新失败', msgType: 1 });
    }
    yield put({ type: IndexActionTypes.CLEAR_MESSAGE, msgCOntent: '', msgType: 1 });
  }
}

export function* updataAvatar(values) {
  console.log('values', values);
  const avatarAddress = values;
  console.log('avatarAddress', avatarAddress);
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(post, 'admin/user/updateUserAvatar', { avatarAddress });
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* updataAvatarFlow() {
  while (true) {
    const request = yield take(AdminSettingTypes.UPDATE_AVATAR);
    console.log('request', request);
    const res = yield call(updataAvatar, request.values);
    if (res && res.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '更新成功', msgType: 0 });
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '更新失败', msgType: 1 });
    }
    yield put({ type: IndexActionTypes.CLEAR_MESSAGE, msgCOntent: '', msgType: 1 });
  }
}
