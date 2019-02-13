import { combineReducers } from 'redux';

export const actionsTypes = {
  GET_AUTHOR_INFO: 'GET_AUTHOR_INFO',
  RESPONSE_AUTHOR_INFO: 'RESPONSE_AUTHOR_INFO',
};

const initialState = {
  authorName: '',
  profile: '',
  avatar: '',
  occupation: '',
  company: '',
};

export const actions = {
  getAuthorInfo: () => ({
    type: actionsTypes.GET_AUTHOR_INFO,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_AUTHOR_INFO:
      console.log('action.data', action.data);
      return {
        ...state,
        authorName: action.data.username,
        profile: action.data.profile,
        avatar: action.data.avatar,
        occupation: action.data.occupation,
        company: action.data.company,
      };
    default:
      return state;
  }
}

const admin = combineReducers({
  adminGlobalState: reducer,
});

export default admin;
