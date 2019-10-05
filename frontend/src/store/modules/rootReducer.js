import { combineReducers } from 'redux';

import ux from '~/store/modules/ux/reducer';
import auth from '~/store/modules/auth/reducer';
import user from '~/store/modules/user/reducer';
import meetups from '~/store/modules/meetups/reducer';

export default combineReducers({
  ux,
  auth,
  user,
  meetups,
});
