import { combineReducers } from 'redux';

const initialState = {
  isFetching: true,
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
  SET_MESSAGE: 'SET_MESSAGE',
};

export const actions = {
  handleLogin: (username, password) => ({
    type: actionsTypes.LOGIN,
    username,
    password,
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
    default:
      return state;
  }
}

export default combineReducers({
  globalState: reducer,
});
