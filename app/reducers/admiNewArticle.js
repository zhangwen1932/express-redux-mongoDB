const initialState = {
  id: '',
  title: '',
  content: '',
};

export const actionsTypes = {
  ADD_ARTICLE: 'ADD_ARTICLE',
  RESPONSE_ADD_ARTICLE: 'RESPONSE_ADD_ARTICLE',
};

export const actions = {
  addArticle: (title, content) => ({
    type: actionsTypes.ADD_ARTICLE,
    title,
    content,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_ADD_ARTICLE:
      return {
        ...state,
        id: action.data._id,
        title: '',
        content: '',
      };
    default:
      return state;
  }
}
