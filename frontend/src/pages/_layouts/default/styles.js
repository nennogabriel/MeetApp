import styled from 'styled-components';
import { color } from '~/styles';

export const Wrapper = styled.div`
  min-height: 100%;
  background: linear-gradient(0deg, ${color.bgStart}, ${color.bgEnd});
  color: #fff;
`;

export const Content = styled.div`
  max-width: 1000px;
  padding: 30px;
  margin: 0 auto;
  font-size: 14px;
`;
