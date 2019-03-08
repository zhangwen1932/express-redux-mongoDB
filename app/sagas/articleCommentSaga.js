import { put, take, call } from 'redux-saga/effects';
import { post, get } from '../fetch/fetch';

import { actionsTypes as CommentActionTypes } from '../reducers/articleComment';
import { actionsTypes as IndexActionTypes } from '../reducers';

export function* addComment(data) {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(post, '/comment/addComment', data);
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* addCommentFlow() {
  while (true) {
    const request = yield take(CommentActionTypes.ADD_COMMENT);
    const response = yield call(addComment, request.data);
    if (response && response.code === 0) {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '发表评论成功', msgType: 0 });
    } else {
      yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '发表评论失败', msgType: 1 });
    }
    yield put({ type: IndexActionTypes.CLEAR_MESSAGE, msgContent: '', msgType: 1 });
  }
}

export function* getCommentsList(id) {
  yield put({ type: IndexActionTypes.FETCH_START });
  try {
    return yield call(get, `/comment/getCommentsList?articleId=${id}`);
  } catch (err) {
    return yield put({ type: IndexActionTypes.SET_MESSAGE, msgContent: '网络请求错误', msgType: 0 });
  } finally {
    yield put({ type: IndexActionTypes.FETCH_END });
  }
}

export function* getCommentsListFlow() {
  while (true) {
    const req = yield take(CommentActionTypes.GET_COMMENTS_LIST);
    const res = yield call(getCommentsList, req.id);
    if (res) {
      if (res.code === 0) {
        yield put({ type: CommentActionTypes.RESPONSE_GET_COMMENTS_LIST, data: res.data });
      }
    }
  }
}
