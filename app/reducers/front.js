import { combineReducers } from 'redux';

export const actionsTypes = {
  GET_AUTHOR_INFO: 'GET_AUTHOR_INFO',
  RESPONSE_AUTHOR_INFO: 'RESPONSE_AUTHOR_INFO',
  GET_AUTHOR_ARTICLES: 'GET_AUTHOR_ARTICLES',
  RESPONSE_AUTHOR_ARTICLES: 'RESPONSE_AUTHOR_ARTICLES',
  URL_LOCATION: 'URL_LOCATION',
  ADD_LIKE: 'ADD_LIKE',
  RESPONSE_ADD_LIKE: 'RESPONSE_ADD_LIKE',
};

const initialState = {
  url: '/',
  authorName: '',
  profile: '',
  avatar: '',
  occupation: '',
  company: '',
  articles: [],
  total: 0,
};

export const actions = {
  changeLocation: url => ({
    type: actionsTypes.URL_LOCATION,
    data: url,
  }),
  getAuthorInfo: () => ({
    type: actionsTypes.GET_AUTHOR_INFO,
  }),
  getAuthorArticles: () => ({
    type: actionsTypes.GET_AUTHOR_ARTICLES,
  }),
  addLike: (id, likeCount) => ({
    type: actionsTypes.ADD_LIKE,
    id,
    likeCount,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_AUTHOR_INFO:
      return {
        ...state,
        authorName: action.data.username,
        profile: action.data.profile,
        avatar: action.data.avatar,
        occupation: action.data.occupation,
        company: action.data.company,
      };
    case actionsTypes.RESPONSE_AUTHOR_ARTICLES:
      return {
        ...state,
        articles: [...action.data.list],
        total: action.data.total,
      };
    case actionsTypes.RESPONSE_ADD_LIKE:
      console.log(action);
      return {
        ...state,
        articles: [...action.data],
      };
    default:
      return state;
  }
}

const admin = combineReducers({
  adminGlobalState: reducer,
});

export default admin;
