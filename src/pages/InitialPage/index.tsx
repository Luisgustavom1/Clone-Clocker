import React from 'react';
import InputDiv from '../../components/InputDiv';
import { MainStyle } from './styles';

const InitialPage = () => {
  return(
    <MainStyle>
      <p>Crie sua agenda compartilhada</p>
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