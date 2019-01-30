import { fork } from 'redux-saga/effects';
import { loginFlow, userAuth } from './adminSaga';
import { addArticleFlow, getArticles } from './adminArticleSaga';

export default function* rootSaga() {
  yield fork(loginFlow);
  yield fork(userAuth);
  yield fork(addArticleFlow);
  yield fork(getArticles);
}
