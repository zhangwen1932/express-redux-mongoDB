import { put, take, call } from 'redux-saga/effects';
import { get } from '../fetch/fetch';

import { actionsTypes as FrontActionTypes } from '../reducers/front';
import { actionsTypes as IndexActionTypes } from '../reducers';

export function* getAuthorInfo() {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(get, '/getIntro');
  } catch (error) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '服务器错误', msgType: 1 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* getAutorInfoFlow() {
  while (true) {
    yield take(FrontActionTypes.GET_AUTHOR_INFO);
    const response = yield call(getAuthorInfo);
    if (response && response.code === 0) {
      yield put({ type: FrontActionTypes.RESPONSE_AUTHOR_INFO, data: response.data });
    }
  }
}

export function* getAuthorArticles() {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(get, '/getAuthorArticles?isPublish=true');
  } catch (error) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '服务器错误', msgType: 1 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* getAutorArticlesFlow() {
  while (true) {
    yield take(FrontActionTypes.GET_AUTHOR_ARTICLES);
    const response = yield call(getAuthorArticles);
    if (response && response.code === 0) {
      yield put({ type: FrontActionTypes.RESPONSE_AUTHOR_ARTICLES, data: response.data });
    }
  }
}
