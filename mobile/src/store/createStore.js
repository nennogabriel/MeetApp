import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middleares) => {
  const enhancer = __DEV__
    ? compose(
        console.tron.createEnhancer(),
        applyMiddleware(...middleares),
      )
    : applyMiddleware(...middleares);
  return createStore(reducers, enhancer);
};
