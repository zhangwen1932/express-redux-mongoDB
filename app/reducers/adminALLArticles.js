export const actionsTypes = {
  ALL_ARTICLE: 'ALL_ARTICLE',
};

const initialState = {
  articles: [],
};

export const actions = {
  allArticle: () => ({
    type: actionsTypes.ALL_ARTICLE,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.ALL_ARTICLE:
      console.log('action', action);
      return {
        ...state,
        articles: action.data,
      };
    default:
      return state;
  }
}
