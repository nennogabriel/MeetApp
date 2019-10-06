import React, { useCallback } from 'react';
import { useSelector } from 'react-redux';

import createRouter from './routes';
import * as NavigationService from '~/services/navigation';

export default function App() {
  const signed = useSelector(state => state.auth.signed);

  const Router = createRouter(signed);

  const setNavigation = useCallback(ref => {
    NavigationService.setNavigator(ref);
  }, []);

  return <Router ref={setNavigation} />;
}
