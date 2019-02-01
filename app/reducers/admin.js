import { combineReducers } from 'redux';
import { reducer as newArticle } from './admiNewArticle';
import { reducer as allArticles } from './adminALLArticles';

export const actionTypes = {
  ADMIN_URL_LOCATION: 'ADMIN_URL_LOCATION',
};

const initialState = {
  url: '/',
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
  newArticle,
  allArticles,
});

export default admin;
