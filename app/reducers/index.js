import { combineReducers } from 'redux';

const initialState = {
  isFetching: true,
  msg: {
    type: 1, // 0失败 1成功
    content: '',
  },
  test: {},
};

export const actionsTypes = {
  FETCH_START: 'FETCH_START',
  FETCH_END: 'FETCH_END',
  SEND_INFO: 'SEND_INFO',
};

export const actions = {
  // eslint-disable-next-line arrow-body-style
  send_test: (test) => {
    return {
      type: actionsTypes.SEND_INFO,
      test,
    };
  },
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
    case actionsTypes.SEND_INFO:
      return {
        ...state, isFetching: true,
      };
    default:
      return state;
  }
}

export default combineReducers({
  globalState: reducer,
});
