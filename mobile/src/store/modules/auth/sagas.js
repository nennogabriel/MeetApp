import { Alert } from 'react-native';
import { all, takeLatest, call, put } from 'redux-saga/effects';

import api from '~/services/api';
import {
  authSignInSuccess,
  authSignUpSuccess,
} from '~/store/modules/auth/actions';

import { requestFailure } from '~/store/modules/ux/actions';
import * as NavigationService from '~/services/navigation';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(authSignInSuccess(token, user));
  } catch (err) {
    Alert.alert(
      'Erro na autenticação',
      'Falha na autenticação, verifique seus dados',
    );
    yield put(requestFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    yield put(authSignUpSuccess());
    NavigationService.navigate('SignIn');
    Alert.alert('Sucesso', 'Seu cadastro foi realizado, faça o login');
  } catch (err) {
    Alert.alert(
      'Erro no cadastro',
      'Falha ao tentar cadastrar, verifique seus dados',
    );
    yield put(requestFailure());
  }
}

export function setToken({ payload }) {
  if (!payload) return;

  const { token } = payload.auth;

  if (token) {
    api.defaults.headers.Authorization = `Bearer ${token}`;
  }
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
]);
