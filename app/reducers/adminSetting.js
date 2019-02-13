const initialState = {
  nickname: '',
  avatar: '',
  profile: '',
  company: '',
  occupation: '',
};

export const actionsTypes = {
  GET_AUTHOR: 'GET_AUTHOR',
  RESPONSE_GET_AUTHOR: 'RESPONSE_GET_AUTHOR',
};

export const actions = {
  getAuthor: () => ({
    type: actionsTypes.GET_AUTHOR,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_GET_AUTHOR:
      console.log('actions', action);
      return {
        ...state,
        nickname: action.data.nickname,
        profile: action.data.profile,
        avatar: action.data.avatar,
        occupation: action.data.occupation,
        company: action.data.company,
      };
    default:
      return state;
  }
}
