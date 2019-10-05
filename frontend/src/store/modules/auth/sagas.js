import { all, takeLatest, call, put } from 'redux-saga/effects';
import { toast } from 'react-toastify';

import api from '~/services/api';
import {
  authSignInSuccess,
  authSignUpSuccess,
} from '~/store/modules/auth/actions';
import history from '~/services/history';
import { requestFailure } from '~/store/modules/ux/actions';

export function* signIn({ payload }) {
  try {
    const { email, password } = payload;
    const response = yield call(api.post, 'sessions', { email, password });

    const { token, user } = response.data;

    api.defaults.headers.Authorization = `Bearer ${token}`;

    yield put(authSignInSuccess(token, user));

    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha na autenticação, Verifique seus dados');
    yield put(requestFailure());
  }
}

export function* signUp({ payload }) {
  try {
    const { name, email, password } = payload;
    console.tron.log('hatunna matata');

    yield call(api.post, 'users', {
      name,
      email,
      password,
    });

    yield put(authSignUpSuccess());
    toast.success('Cadastro realizado! Faça o login com suas credenciais');
    history.push('/');
  } catch (err) {
    toast.error('Falha no cadastro, verifique seus dados');
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

export function signOut() {
  history.push('/');
}

export default all([
  takeLatest('persist/REHYDRATE', setToken),
  takeLatest('@auth/SIGN_IN_REQUEST', signIn),
  takeLatest('@auth/SIGN_UP_REQUEST', signUp),
  takeLatest('@auth/SIGN_OUT', signOut),
]);
