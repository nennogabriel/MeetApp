import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

export default reducers => {
  const persistedReducer = persistReducer(
    {
      key: 'meetapp.com/dev',
      storage,
      whitelist: ['auth', 'user', 'meetups'],
    },
    reducers
  );

  return persistedReducer;
};
