const initialState = {
  author: '',
  content: '',
  time: '',
};

export const actionsTypes = {
  ADD_COMMENT: 'ADD_COMMENT',
};

export const actions = {
  addComment: data => ({
    type: actionsTypes.ADD_COMMENT,
    data,
  }),
};

export function reducer(state = initialState) {
  return state;
}
