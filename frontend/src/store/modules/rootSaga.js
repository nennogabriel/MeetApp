import { all } from 'redux-saga/effects';

import auth from '~/store/modules/auth/sagas';
import user from '~/store/modules/user/sagas';
import meetups from '~/store/modules/meetups/sagas';

export default function* rootSaga() {
  return yield all([auth, user, meetups]);
}
