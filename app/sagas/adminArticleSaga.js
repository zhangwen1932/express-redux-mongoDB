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
      yield put({ type: AdminActionTypes.RESPONSE_ADD_ARTICLE, data: response.data });
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '发表文章失败', msgType: 1 });
    }
    yield put({ type: IndexActionTypes.CLEAR_MESSAGE, msgContent: '', msgType: 1 });
  }
}

export function* getArticleList() {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(get, '/admin/article/getArticles?isPublish=true');
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* getArticleListFlow() {
  while (true) {
    yield take(AdminArticleTypes.GET_ALL_ARTICLES);
    const res = yield call(getArticleList);
    if (res) {
      if (res.code === 0) {
        yield put({ type: AdminArticleTypes.RESPONSE_GET_ALL_ARTICLES, data: res.data });
      } else {
        yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 });
      }
    }
  }
}
