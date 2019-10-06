import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createBottomTabNavigator } from 'react-navigation-tabs';

import SignIn from './pages/auth/SignIn';
import SignUp from './pages/auth/SignUp';
import Dashboard from './pages/app/Dashboard';
import Subscriptions from './pages/app/Subscriptions';
import Profile from './pages/app/Profile';

export default (isSigned = false) =>
  createAppContainer(
    createSwitchNavigator(
      {
        auth: createSwitchNavigator({
          SignIn,
          SignUp,
        }),
        app: createBottomTabNavigator(
          {
            Dashboard,
            Subscriptions,
            Profile,
          },
          {
            resetOnBlur: true,
            tabBarOptions: {
              keyboardHidesTabBar: true,
              activeTintColor: '#fff',
              inactiveTintColor: 'rgba(255,255,255, 0.6)',
              style: {
                backgroundColor: '#2B1A2F',
                borderTopWidth: 0,
              },
            },
          },
        ),
      },
      {
        initialRouteName: isSigned ? 'app' : 'auth',
      },
    ),
  );
