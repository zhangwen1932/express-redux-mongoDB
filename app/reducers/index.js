import { combineReducers } from 'redux';

const initialState = {
  test: {},
};

export const actionsTypes = {
  SEND_INFO: 'SEND_INFO',
};

export const actions = {
  // eslint-disable-next-line arrow-body-style
  send_test: (test) => {
    console.log('test', test);
    return {
      type: actionsTypes.SEND_INFO,
      test,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
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
