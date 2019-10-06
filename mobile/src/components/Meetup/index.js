import React, { useMemo } from 'react';
import PropTypes from 'prop-types';
import { format, parseISO } from 'date-fns';
import { pt } from 'date-fns/locale';

import {
  Container,
  Content,
  Banner,
  Title,
  InfoContainer,
  InfoIcon,
  InfoText,
  InfoSubscribed,
  BigButton,
} from './styles';

import imageHold from '~/assets/hold.png';

export default function Meetup({ data, onPress, children, subscribed }) {
  const dateFormatted = useMemo(
    () => format(parseISO(data.date), "dd 'de' MMMM 'de' yyyy", { locale: pt }),
    [data.date],
  );
  return (
    <Container>
      <Banner source={data.File.url ? { uri: data.File.url } : imageHold} />
      <Content>
        <Title>{data.title}</Title>
        <InfoContainer>
          <InfoIcon name="event" />
          <InfoText>{dateFormatted}</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoIcon name="place" />
          <InfoText>{data.location}</InfoText>
        </InfoContainer>
        <InfoContainer>
          <InfoIcon name="person" />
          <InfoText>{data.User.name}</InfoText>
        </InfoContainer>
        {subscribed ? (
          <InfoSubscribed>Você está inscrito</InfoSubscribed>
        ) : (
          <BigButton onPress={onPress}>{children}</BigButton>
        )}
      </Content>
    </Container>
  );
}

Meetup.propTypes = {
  data: PropTypes.shape({
    title: PropTypes.string,
    date: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
    location: PropTypes.string,
    User: PropTypes.shape({ name: PropTypes.string }),
    File: PropTypes.shape({ url: PropTypes.string }),
  }).isRequired,
  onPress: PropTypes.func.isRequired,
  children: PropTypes.string.isRequired,
  subscribed: PropTypes.bool,
};

Meetup.defaultProps = {
  subscribed: null,
};
