import styled from 'styled-components';
import { darken } from 'polished';
import { color } from '~/styles';

export const Container = styled.div`
  header {
    margin-bottom: 20px;
    display: flex;
    align-content: center;
    justify-content: space-between;

    div {
      display: flex;
      button {
        margin-left: 10px;
        padding: 8px 20px;
        border-radius: 5px;
        display: flex;
        align-items: center;
        font-size: 14px;
        color: #fff;
        svg {
          margin-right: 8px;
        }
      }
      .edit {
        background: ${color.info};
        &:hover {
          background: ${darken(0.05, color.info)};
        }
      }
      .cancel {
        background: ${color.primary};
        &:hover {
          background: ${darken(0.05, color.primary)};
        }
      }
    }
  }
  main {
    margin-bottom: 20px;
    color: #fff;
    font-size: 18px;
    line-height: 1.5;

    img {
      margin-bottom: 20px;
      max-width: 100%;
      border-radius: 6px;
    }
  }
  footer {
    color: #aaa;
    font-size: 16px;
    display: flex;
    flex-direction: row;

    div {
      display: flex;
      align-items: flex-start;
      justify-content: flex-start;
      margin-right: 20px;
      svg {
        margin-right: 5px;
      }
    }
  }
`;
