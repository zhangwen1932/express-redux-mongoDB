import { fork } from 'redux-saga/effects';
import { loginFlow, userAuth } from './adminManagerSaga';

export default function* rootSaga() {
  yield fork(loginFlow);
  yield fork(userAuth);
}
