import React, { useState, useEffect, useCallback } from 'react';
import { Alert } from 'react-native';
import { withNavigationFocus } from 'react-navigation';
import Icon from 'react-native-vector-icons/MaterialIcons';

import { Container, MeetupList, EnptyList, EnptyListText } from './styles';
import Meetup from '~/components/Meetup';
import api from '~/services/api';

function Subscriptions({isFocused}) {
  const [meetups, setMeetups] = useState([]);

  useEffect(() => {
    async function loadMeetups() {
      const response = await api.get('subscriptions');
      setMeetups(response.data);
    }
    loadMeetups();
  }, [isFocused]);

  const handleSubscriptionCancel = useCallback(id => {
    async function subscribeTo() {
      try {
        await api.delete(`subscriptions/${id}`);
        Alert.alert('Success', ' Você se desincreveu no evento!');
        setMeetups(meetups.filter(meetup => meetup.id !== id))
      } catch (err) {
        Alert.alert('Error', ' Sua inscrição não foi encontrada');
      }
    }
    subscribeTo();
  }, [meetups]);

  return (
    <Container>
      {meetups.length > 0 ? (
        <MeetupList
          data={meetups}
          keyExtrator={item => String(item.Meetup.id)}
          renderItem={({ item }) => (
            <Meetup
              onPress={() => handleSubscriptionCancel(item.id)}
              data={item.Meetup}>
              Cancelar inscrição
            </Meetup>
          )}
        />
      ) : (
        <EnptyList>
          <EnptyListText>
            Não se inscreveu para nenhum meetup futuro... :(
          </EnptyListText>
        </EnptyList>
      )}
    </Container>
  );
}

Subscriptions.navigationOptions = {
  tabBarLabel: 'Inscrições',
  tabBarIcon: option => (
    <Icon name="local-offer" size={20} color={option.tintColor} />
  ),
};

export default withNavigationFocus(Subscriptions);
