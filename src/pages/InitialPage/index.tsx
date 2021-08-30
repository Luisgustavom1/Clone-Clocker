import firebase from 'firebase';
import { useState } from 'react';
import { useEffect } from 'react';
import { FormEvent } from 'react';
import InputDiv from '../../components/InputDiv';
import { MainStyle } from './styles';
import { parseCookies, setCookie, destroyCookie } from 'nookies'

const InitialPage = () => {
  const [user, setUser] = useState<any>()
  const cookies = parseCookies()

  const login = (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    const email = data.get('email') as string;
    const password = data.get('password') as string;

    if(!email || !password) return alert('Preencha todos os dados')
     
    firebase.auth().signInWithEmailAndPassword(email, password)
    .then((userCredential) => {
      setUser(userCredential.user);

      setCookie(null, 'uid', user.uid, {
        maxAge: 3600,
        path: '/'
      })
    })
    .catch((error) => {
      var errorCode = error.code;
      var errorMessage = error.message;
      alert(errorMessage + ' ' + errorCode);
    });
  };

  return(
    <MainStyle>
      <p>Crie sua agenda compartilhada</p>
      <form onSubmit={(e) => login(e)}>
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
        <button type='submit'>
          Entrar
        </button>
      </form>
    </MainStyle>
  );
}

export default InitialPage;

function setCookies(arg0: string, uid: any) {
  throw new Error('Function not implemented.');
}
