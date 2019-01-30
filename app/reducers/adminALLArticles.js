const initialState = {
  articles: [],
  total: 0,
};

export const actionsTypes = {
  GET_ALL_ARTICLES: 'GET_ALL_ARTICLES',
  RESPONSE_GET_ALL_ARTICLES: 'RESPONSE_GET_ALL_ARTICLES',
};

export const actions = {
  getAllArticles: () => ({
    type: actionsTypes.GET_ALL_ARTICLES,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_GET_ALL_ARTICLES:
      return {
        ...state,
        articles: [...action.data.list],
        total: action.data.total,
      };
    default:
      return state;
  }
}
