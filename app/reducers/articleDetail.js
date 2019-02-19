const initialState = {
  title: '',
  content: '',
  time: '',
};

export const actionsTypes = {
  GET_ARTICLE: 'GET_ARTICLE',
  RESPONSE_GET_ARTICLE: 'RESPONSE_GET_ARTICLE',
};

export const actions = {
  getArticle: id => ({
    type: actionsTypes.GET_ARTICLE,
    id,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_GET_ARTICLE:
      return {
        ...state,
        title: action.data.title,
        content: action.data.content,
        time: action.data.time,
      };
    default:
      return state;
  }
}
