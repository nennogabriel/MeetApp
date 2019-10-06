import styled from 'styled-components/native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import Button from '../Button';

export const Container = styled.View`
  background: #fff;
  max-width: 100%;
  border-radius: 6px;
  margin-bottom: 20px;
`;

export const Content = styled.View`
  padding: 20px;
`;

export const Banner = styled.Image`
  height: 150px;
  border-top-left-radius: 6px;
  border-top-right-radius: 6px;
`;

export const Title = styled.Text`
  padding-top: 15px;
  font-family: Helvetica-Bold;
  font-size: 18px;
  color: #333333;
`;

export const InfoContainer = styled.View`
  margin-top: 10px;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

export const InfoIcon = styled(Icon).attrs({
  size: 18,
  color: '#999',
})`
  margin-right: 5px;
`;

export const InfoText = styled.Text`
  color: #999;
`;

export const BigButton = styled(Button)`
  margin-top: 15px;
`;

export const InfoSubscribed = styled.Text`
  color: green;
  margin-top: 15px;
`;
