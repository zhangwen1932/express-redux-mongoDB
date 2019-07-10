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
  UPDATE_AVATAR: 'UPDATE_AVATAR',
  RESPONSE_UPDATE_AVATAR: 'RESPONSE_UPDATE_AVATAR',
};

export const actions = {
  getAuthor: () => ({
    type: actionsTypes.GET_AUTHOR,
  }),
  updateInfo: values => ({
    type: actionsTypes.UPDATE_INFO,
    values,
  }),
  updateAvatar: values => ({
    type: actionsTypes.UPDATE_AVATAR,
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
    case actionsTypes.RESPONSE_UPDATE_AVATAR:
      return {
        avatar: action.data.avatar,
      };
    default:
      return state;
  }
}
