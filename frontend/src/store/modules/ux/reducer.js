import produce from 'immer';

const INITIAL_STATE = {
  working: false,
};

export default function user(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    if (action.type.endsWith('_REQUEST')) {
      draft.working = true;
    } else if (
      action.type.endsWith('_SUCCESS') ||
      action.type.endsWith('_FAILURE')
    ) {
      draft.working = false;
    }
  });
}
