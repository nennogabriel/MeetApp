import { all, takeLatest, call, put } from 'redux-saga/effects';
import { format, parseISO } from 'date-fns';
import pt from 'date-fns/locale/pt';
import { toast } from 'react-toastify';

import api from '~/services/api';
import history from '~/services/history';
import { requestFailure } from '~/store/modules/ux/actions';
import {
  meetupsCreateSuccess,
  meetupsIndexSuccess,
  meetupsUpdateSuccess,
} from './actions';

export function* meetupCreate({ payload }) {
  try {
    const response = yield call(api.post, '/meetups', payload);

    yield put(
      meetupsCreateSuccess({
        ...response.data,
        dateFormatted: format(parseISO(response.data.date), "d 'de' MMMM", {
          locale: pt,
        }),
      })
    );

    toast.success('meetup criado com sucesso');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao cadastrar o meetup, verifique os dados');
    yield put(requestFailure());
  }
}

function* meetupIndex() {
  try {
    const response = yield call(api.get, '/meetups', {
      params: { only: 'mine' },
    });
    const data = response.data.map(item => {
      return {
        ...item,
        dateFormatted: format(parseISO(item.date), "d 'de' MMMM", {
          locale: pt,
        }),
      };
    });
    yield put(meetupsIndexSuccess(data));
  } catch (err) {
    toast.error('Falha ao solicitar dados');
    yield put(requestFailure());
  }
}

function* meetupUpdate({ payload }) {
  try {
    const response = yield call(api.put, `/meetups/${payload.id}`, payload);

    yield put(meetupsUpdateSuccess(response.data));
    toast.success('Meeup atualizado com sucesso');
    history.push('/dashboard');
  } catch (err) {
    toast.error('Falha ao tentar atualizar');
    yield put(requestFailure());
  }
}

export default all([
  takeLatest('@meetups/ADD_REQUEST', meetupCreate),
  takeLatest('@meetups/INDEX_REQUEST', meetupIndex),
  takeLatest('@meetups/UPDATE_REQUEST', meetupUpdate),
]);
