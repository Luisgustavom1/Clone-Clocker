import styled from 'styled-components';

export const MainStyle = styled.main`
  margin: 70px auto;
  
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  
  gap: 30px;

  width: 70%;

  form {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  p {
    margin-bottom: 30px;
    font-size: 16px;
  }

  span {
    display: flex;
    align-items: center;

    width: 100%;

    div {
      width: 233px;
    }
  }

  button {
    background: ${(props) => props.theme.same.background.initialPage};
    color: #FFFFFF;

    width: 100%;

    letter-spacing: .2rem;

    padding: 18px;

    border-radius: 6px;

    font-size: 18px;
  }
`;
