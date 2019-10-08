import React, { useState, useEffect, useMemo, useCallback } from 'react';
import { useSelector } from 'react-redux';
import { Alert } from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { format, addDays, isAfter, isSameDay } from 'date-fns';
import { pt } from 'date-fns/locale';

import {
  Container,
  DateContainer,
  DateSelector,
  DateSelectorText,
  MeetupList,
  EnptyList,
  EnptyListText,
} from './styles';
import Meetup from '~/components/Meetup';
import api from '~/services/api';

export default function Dashboard() {
  const { id: userId } = useSelector(state => state.user.profile);
  const [date, setDate] = useState(new Date());
  const [meetups, setMeetups] = useState([]);
  const dateFormatted = useMemo(
    () => format(date, "dd 'de' MMMM", { locale: pt }),
    [date],
  );

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('meetups', {
        params: {
          only: 'others',
          date,
        },
      });
      setMeetups(response.data);
    }
    loadMeetups();
  }, [date]);

  const handleSubiscription = useCallback(id => {
    async function subscribeTo() {
      try {
        await api.post(`subscriptions/${id}`);
        Alert.alert('Success', ' Você se increveu no evento!');
      } catch (err) {
        Alert.alert('Error', ':( você não pode se inscrever no evento');
      }
    }
    subscribeTo();
  }, []);

  const handleChangeDate = useCallback(
    difference => {
      const newDate = addDays(date, difference);
      const today = new Date();
      if (isAfter(newDate, today) || isSameDay(newDate, today)) {
        setDate(newDate);
      } else {
        Alert.alert('Erro', 'Não é permitido visualizar datas passadas.');
      }
    },
    [date],
  );

  return (
    <Container>
      <DateContainer>
        <DateSelector onPress={() => handleChangeDate(-1)}>
          <Icon name="chevron-left" size={24} color="#fff" />
        </DateSelector>
        <DateSelectorText>{dateFormatted}</DateSelectorText>
        <DateSelector onPress={() => handleChangeDate(1)}>
          <Icon name="chevron-right" size={24} color="#fff" />
        </DateSelector>
      </DateContainer>
      {meetups.length > 0 ? (
        <MeetupList
          data={meetups}
          keyExtrator={item => String(item.id)}
          renderItem={({ item }) => (
            <Meetup
              onPress={() => handleSubiscription(item.id)}
              data={item}
              subscribed={Boolean(item.Subscriptions)}>
              Realizar inscrição
            </Meetup>
          )}
        />
      ) : (
        <EnptyList>
          <EnptyListText>Nenhum Meetup para o dia... :(</EnptyListText>
        </EnptyList>
      )}
    </Container>
  );
}

Dashboard.navigationOptions = {
  tabBarLabel: 'Meetups',
  tabBarIcon: option => (
    <Icon name="format-list-bulleted" size={20} color={option.tintColor} />
  ),
};
