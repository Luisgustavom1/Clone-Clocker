import React from 'react';
import InputDiv from '../../components/InputDiv';
import { MainStyle } from './style';

const InitialPage: React.FC = () => {
  return(
    <MainStyle>
      <InputDiv 
        label='E-mail'
        placeholder='Insira seu e-mail'
        identify='email'
        width='300px'
      />
      <InputDiv 
        label='Password'
        placeholder='Insira sua senha'
        identify='password'
        type='password'
        width='300px'
      />
      <span>
        <div>
          CLOCKER.WORK/
        </div>
        <InputDiv 
          identify='url'
          width='50px'
        />
      </span>
      <button>
        Entrar
      </button>
    </MainStyle>
  );
}

export default InitialPage;