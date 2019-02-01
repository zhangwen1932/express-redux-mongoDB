import { put, take, call } from 'redux-saga/effects';
import { get } from '../fetch/fetch';

import { actionsTypes as IndexActionTypes } from '../reducers';
import { actionsTypes as ArticleTypes } from '../reducers/articleDetail';

export function* getArticle(id) {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(get, `/admin/article/getArticlesDetail?id=${id}`);
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* getArticleFlow() {
  while (true) {
    const request = yield take(ArticleTypes.GET_ARTICLE);
    const res = yield call(getArticle, request.id);
    if (res) {
      if (res.code === 0) {
        console.log('res', res);
        yield put({ type: ArticleTypes.RESPONSE_GET_ARTICLE, data: res.data });
      } else {
        yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: res.message, msgType: 0 });
      }
    }
  }
}
