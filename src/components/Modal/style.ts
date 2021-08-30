import styled from 'styled-components';

export const Container = styled.article`
  background-color: rgba(0, 0, 0, .1);

  width: 100vw;
  height: 100vh;

  position: fixed;
  top: 0;
  left: 0;

  section {
    background-color: ${({ theme }) => theme.background.main};
    
    width: 60%;
    height: 70%;

    margin: 80px auto;

    border-radius: 10px;
  }

  header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 15px 30px;

    i {
      font-size: 25px;
      color: ${({ theme }) => theme.colors.primary};
    }

    img{
      height: 55px;

      margin: 0 auto;
    }
  }

`;

export const MainStyle = styled.main`
  padding: 30px 20%;

  font-size: 15px;

  margin-top: 20px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  p {
    color: ${({ theme }) => theme.same.background.initialPage};
    font-weight: 500;
    font-size: 17px;
  }
  form {
    width: 100%;

    div {
      display: flex;
      flex-direction: column;
      gap: 10px;      

      margin: 0;
      
      label {
        margin-top: 40px;
      }

      input {
        padding: 15px;

        border-radius: 10px;

        background-color: ${({ theme }) => theme.colors.primary};
      }
    }
  }

  button {
    background-color: ${({ theme }) => theme.same.background.initialPage};
    
    border-radius: 6px;
    
    padding: 15px 20px;

    margin: 40px auto;

    color: white;

    font-weight: 500;
    &:hover {
      filter: brightness(.9);
    }
  }
`;