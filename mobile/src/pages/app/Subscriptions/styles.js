import styled from 'styled-components/native';

export const Container = styled.SafeAreaView`
  flex: 1;
  /* align-items: center;
  justify-content: center; */
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
