import { fork } from 'redux-saga/effects';
import { sendInfoFlow } from './testSaga';

export default function* rootSaga() {
  yield fork(sendInfoFlow);
}
