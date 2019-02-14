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
  UPDATE_INFO: 'UPDATE_INFO',
};

export const actions = {
  getAuthor: () => ({
    type: actionsTypes.GET_AUTHOR,
  }),
  updateInfo: values => ({
    type: actionsTypes.UPDATE_INFO,
    values,
  }),
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actionsTypes.RESPONSE_GET_AUTHOR:
      return {
        ...state,
        email: action.data.email,
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
