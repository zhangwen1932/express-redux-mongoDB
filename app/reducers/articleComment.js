const initialState = {
  author: '',
  content: '',
  time: '',
  commentsList: [],
};

export const actionsTypes = {
  ADD_COMMENT: 'ADD_COMMENT',
  GET_COMMENTS_LIST: 'GET_COMMENTS_LIST',
  RESPONSE_GET_COMMENTS_LIST: 'RESPONSE_GET_COMMENTS_LIST',
};

export const actions = {
  addComment: data => ({
    type: actionsTypes.ADD_COMMENT,
    data,
  }),
  getCommentsList: id => ({
    type: actionsTypes.GET_COMMENTS_LIST,
    id,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_GET_COMMENTS_LIST:
      return {
        ...state,
        commentsList: [...action.data],
      };
    default:
      return state;
  }
}
