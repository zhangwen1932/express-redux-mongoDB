import { fork } from 'redux-saga/effects';
import { loginFlow, userAuth } from './adminSaga';
import { addArticleFlow, getArticleListFlow } from './adminArticleSaga';
import { getArticleFlow } from './articleSaga';
import { getAuthorFlow, updateInfoFlow } from './adminSetting';
import { getAutorInfoFlow, getAutorArticlesFlow, addLikeFlow } from './frontSaga';

export default function* rootSaga() {
  yield fork(loginFlow);
  yield fork(userAuth);
  yield fork(addArticleFlow);
  yield fork(getArticleListFlow);
  yield fork(getArticleFlow);
  yield fork(getAutorInfoFlow);
  yield fork(getAutorArticlesFlow);
  yield fork(getAuthorFlow);
  yield fork(updateInfoFlow);
  yield fork(addLikeFlow);
}
