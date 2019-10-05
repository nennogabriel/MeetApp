import { createStore, compose, applyMiddleware } from 'redux';

export default (reducers, middleares) => {
  const enhancer =
    process.env.NODE_ENV === 'development'
      ? compose(
          console.tron.createEnhancer(),
          applyMiddleware(...middleares)
        )
      : applyMiddleware(...middleares);
  return createStore(reducers, enhancer);
};
