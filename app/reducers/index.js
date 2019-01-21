import { combineReducers } from 'redux';

const initialState = {
  userInfo: {},
};

export const actionsTypes = {
  LOGIN: 'LOGIN',
};

export const actions = {
  // eslint-disable-next-line arrow-body-style
  handleLogin: (username, password) => {
    return {
      type: actionsTypes.LOGIN,
      username,
      password,
    };
  },
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    default:
      return state;
  }
}

export default combineReducers({
  globalState: reducer,
});
