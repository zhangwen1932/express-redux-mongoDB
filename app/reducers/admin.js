import { combineReducers } from 'redux';

export const actionTypes = {
  GET_AUTHOR_INFO: 'GET_AUTHOR_INFO',
};

const initialState = {
  authorName: '',
  authorProfile: '',
  avatar: '',
  occupation: '',
  company: '',
};

export const actions = {
  changeLocationAdmin: url => ({
    type: actionTypes.ADMIN_URL_LOCATION,
    data: url,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionTypes.ADMIN_URL_LOCATION:
      console.log('action.data', action.data);
      return {
        ...state,
        url: action.data,
      };
    default:
      return state;
  }
}

const admin = combineReducers({
  adminGlobalState: reducer,
});

export default admin;
