import produce from 'immer';

const INITIAL_STATE = {
  list: [],
};

export default function auth(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@meetups/ADD_SUCCESS':
        draft.list.push(action.payload);
        break;
      case '@meetups/INDEX_SUCCESS':
        draft.list = action.payload;
        break;
      case '@auth/SIGN_OUT':
        draft.list = null;
        break;
      default:
    }
  });
}
