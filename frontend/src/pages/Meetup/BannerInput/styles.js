import styled from 'styled-components';

export const Container = styled.div`
  align-self: center;
  margin-bottom: 30px;
  width: 100%;

  label {
    display: block;
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center center;
    height: 280px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;

    &:hover {
      opacity: 0.7;
    }

    input {
      display: none;
    }

    div {
      display: ${props => (props.hasThumbnail ? 'none' : 'flex')};
      flex-direction: column;
      justify-content: center;
      align-items: center;
      flex:1;
      height: 100%;
      background: rgba(0,0,0,0.2);

      img {
        width: 40px;
      }
      span {
        margin-top: 20px;
        font-size: 20px;
        color: #999;
      }
    }

  }
`;
