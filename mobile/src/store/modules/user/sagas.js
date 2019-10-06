import { all, takeLatest, call, put } from 'redux-saga/effects';
import { Alert } from 'react-native';
import api from '~/services/api';
import { userUpdateSuccess } from './actions';
import { requestFailure } from '~/store/modules/ux/actions';

export function* updateProfile({ payload }) {
  try {
    const { name, email, ...rest } = payload.data;

    const profile = {
      name,
      email,
      ...(rest.oldPassword ? rest : {}),
    };
    const response = yield call(api.put, 'users', profile);

    yield put(userUpdateSuccess(response.data));
    Alert.alert('Sucesso', 'Perfil atualizado com sucesso!');
  } catch (err) {
    yield put(requestFailure());
    Alert.alert('Erro', 'Falha ao atualizar perfil, vefique seus dados');
  }
}

export default all([takeLatest('@user/UPDATE_REQUEST', updateProfile)]);
