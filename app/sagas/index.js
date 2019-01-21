import { fork } from 'redux-saga/effects';
import { loginFlow } from './adminManagerSaga';

export default function* rootSaga() {
  yield fork(loginFlow);
}
