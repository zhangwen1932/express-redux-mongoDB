import { fork } from 'redux-saga/effects';
import { sendInfo } from './testSaga';


export default function* rootSaga() {
  yield fork(sendInfo);
}
