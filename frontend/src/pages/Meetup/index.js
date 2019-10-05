import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input } from '@rocketseat/unform';
import { produce } from 'immer';
import { format, parseISO } from 'date-fns';

import SubmitButton from '~/components/SubmitButton';

import BannerInput from './BannerInput';

import { Container } from './styles';
import {
  meetupsCreateRequest,
  meetupsUpdateRequest,
} from '~/store/modules/meetups/actions';

function Meetup({ match }) {
  const id = Number(match.params.id);
  const meetups = useSelector(state => state.meetups.list);
  const dispatch = useDispatch();
  const [meetup, setMeetup] = useState({});

  useEffect(() => {
    if (id >= 0) {
      const meetupExists = meetups.find(item => item.id === id);
      setMeetup(
        produce(meetupExists, draft => {
          draft.date = format(parseISO(draft.date), 'yyyy-MM-dd');
        })
      );
    }
  }, [id, meetups]);

  function handleSubmit(data) {
    if (id) {
      data.file_id = data.file_id || meetup.file_id;
      data.id = id;
      dispatch(meetupsUpdateRequest(data));
    } else {
      dispatch(meetupsCreateRequest(data));
    }
  }

  return (
    <Container>
      <Form initialData={meetup} onSubmit={handleSubmit}>
        <BannerInput name="file" currentUrl={meetup.File && meetup.File.url} />

        <Input name="title" placeholder="Título de Meetup" />
        <Input
          multiline
          name="description"
          rows="4"
          value={meetup.description}
          placeholder="Descrição completa"
        />
        <Input name="date" type="date" placeholder="Data do meetup" />
        <Input name="location" placeholder="Localização" />

        <SubmitButton>{id ? 'Editar Meetup' : 'Salvar Meetup'}</SubmitButton>
      </Form>
    </Container>
  );
}

export default Meetup;

Meetup.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string,
    }),
  }).isRequired,
};
