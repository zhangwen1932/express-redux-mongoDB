import { put, take, call } from 'redux-saga/effects';
import { post, get } from '../fetch/fetch';

import { actionsTypes as AdminArticleTypes } from '../reducers/adminALLArticles';
import { actionsTypes as AdminActionTypes } from '../reducers/admiNewArticle';
import { actionsTypes as IndexActionTypes } from '../reducers';

export function* addArticle(title, content) {
  yield put({ type: IndexActionTypes.FETCH_START });
  const isPublish = 'true';
  try {
    return yield call(post, '/admin/article/addArticle', { title, content, isPublish });
  } catch (error) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '服务器错误', msgType: 1 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* addArticleFlow() {
  while (true) {
    const request = yield take(AdminActionTypes.ADD_ARTICLE);
    const response = yield call(addArticle, request.title, request.content);
    if (response && response.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '发表文章成功', msgType: 0 });
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '发表文章失败', msgType: 1 });
    }
    yield put({ type: IndexActionTypes.CLEAR_MESSAGE, msgContent: '', msgType: 1 });
  }
}

export function* getArticles() {
  while (true) {
    yield take(AdminArticleTypes.ALL_ARTICLE);
    try {
      yield put({ type: IndexActionTypes.FETCH_START });
      const response = yield call(get, '/admin/article/getArticles?pageNumber=1&isPublish=true');
      console.log('response', response);
      if (response && response.code === 0) {
        yield put({ type: AdminArticleTypes.ALL_ARTICLE, data: response.data });
      }
    } catch (err) {
      console.log(err);
    } finally {
      yield put({ type: IndexActionTypes.FETCH_END });
    }
  }
}
