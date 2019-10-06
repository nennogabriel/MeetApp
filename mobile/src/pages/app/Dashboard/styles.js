import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
`;

export const DateContainer = styled.View`
  flex-direction: row;
  justify-content: space-evenly;
  align-items: center;
  margin: 10px 0;
`;

export const DateSelector = styled.TouchableOpacity`
  padding: 12px 15px;
`;

export const DateSelectorText = styled.Text`
  font-size: 20px;
  color: #fff;
  font-weight: bold;
`;

export const MeetupList = styled.FlatList.attrs({
  showsVerticalScrollIndicator: false,
  contentContainerStyle: { padding: 20 },
})``;

export const EnptyList = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;

export const EnptyListText = styled.Text`
  color: #fff;
  font-size: 24px;
`;
