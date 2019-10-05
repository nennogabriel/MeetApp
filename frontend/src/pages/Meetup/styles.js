import styled from 'styled-components';
import { color } from '~/styles';

export const Container = styled.div`
  form {
    display: flex;
    flex-direction: column;

    & > * {
      margin-bottom: 10px;
      font-size: 16px;
    }

    input,
    textarea {
      background: rgba(0, 0, 0, 0.1);
      padding: 14px 18px;
      color: #eee;
      border-radius: 6px;

      &::placeholder {
        color: #999;
      }
    }
    textarea {
      resize: none;
    }
    button {
      align-self: flex-end;
      background: ${color.primary};
      font-weight: bold;
      font-size: 16px;
      color: #ffffff;
      padding: 8px 20px;
      border-radius: 4px;
    }
  }
`;
