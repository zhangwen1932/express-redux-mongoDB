import { combineReducers } from 'redux';

const initialState = {
  test: {},
};

export const actionsTypes = {
  SEND_INFO: 'SEND_INFO',
};

export const actions = {
  // eslint-disable-next-line arrow-body-style
  send_test: (testData) => {
    return {
      type: actionsTypes.SEND_INFO,
      test: testData,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.SEND_INFO:
      return {
        ...state,
        test: action.test,
      };
    default:
      return state;
  }
}

export default combineReducers({
  globalState: reducer,
});
