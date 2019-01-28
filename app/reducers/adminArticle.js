export const actionsTypes = {
  ADD_ARTICLE: 'ADD_ARTICLE',
};

const initialState = {
  title: '',
  content: '',
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
    case actionsTypes.ADD_ARTICLE:
      return {
        ...state,
        title: action.title,
        content: action.content,
      };
    default:
      return state;
  }
}
