const initialState = {
  id: '',
  title: '',
  content: '',
  time: '',
};

export const actionsTypes = {
  ADD_ARTICLE: 'ADD_ARTICLE',
  RESPONSE_ADD_ARTICLE: 'RESPONSE_ADD_ARTICLE',
};

export const actions = {
  addArticle: data => ({
    type: actionsTypes.ADD_ARTICLE,
    data,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_ADD_ARTICLE:
      return {
        ...state,
        id: action.data._id,
      };
    default:
      return state;
  }
}
