import { combineReducers } from 'redux';
import admin from './admin';
import { reducer as article } from './articleDetail';

const initialState = {
  isFetching: false,
  msg: {
    type: 1, // 1失败,2成功
    content: '',
  },
  userInfo: {},
};

export const actionsTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  LOGIN: 'LOGIN',
  RESPONSE_USER_INFO: 'RESPONSE_USER_INFO',
  SET_MESSAGE: 'SET_MESSAGE',
  CLEAR_MESSAGE: 'CLEAR_MESSAGE',
  USER_AUTH: 'USER_AUTH"',
};

export const actions = {
  handleLogin: (username, password) => ({
    type: actionsTypes.LOGIN,
    username,
    password,
  }),
  userAuth: () => ({
    type: actionsTypes.USER_AUTH,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.FETCH_START:
      return {
        ...state, isFetching: true,
      };
    case actionsTypes.FETCH_END:
      return {
        ...state, isFetching: false,
      };
    case actionsTypes.SET_MESSAGE:
      return {
        ...state,
        isFetching: false,
        msg: {
          type: action.msgType,
          content: action.msgContent,
        },
      };
    case actionsTypes.CLEAR_MESSAGE:
      return {
        ...state,
        msg: {
          type: action.msgType,
          content: action.msgContent,
        },
      };
    case actionsTypes.RESPONSE_USER_INFO:
      return {
        ...state,
        userInfo: action.data,
      };
    default:
      return state;
  }
}

export default combineReducers({
  globalState: reducer,
  admin,
  article,
});
