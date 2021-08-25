import styled from 'styled-components';

type InputDivProps = {
  width: string
}

export const InputDivStyle = styled.div<InputDivProps>`
  display: flex;
  flex-direction: column;
  gap: 12px;

  min-width: ${props => props.width};
  width: 100%;

  margin: 0 auto;

  color: #B1C5E2;

  font-size: 15px;
  input {
    width: 100%;

    border-radius: 6px;
    border: 1px solid #B1C5E2;

    padding: 18px;
  }
  :-ms-input-placeholder  {
    color: red;
  }
`;
