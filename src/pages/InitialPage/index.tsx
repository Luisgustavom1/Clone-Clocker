import { FormEvent, useContext } from 'react';
import InputDiv from '../../components/InputDiv';
import { MainStyle } from './styles';
import { setCookie } from 'nookies';
import { useHistory } from 'react-router-dom';
import AppContext from '../../context/AppContext';

const InitialPage = () => {
  const history = useHistory();

  const { login, setUser, user } = useContext(AppContext);

  const handleClick = async (e: FormEvent<HTMLFormElement> | any) => {
    e.preventDefault();

    const data = new FormData(e.target);

    let email = data.get('email') as string;
    let password = data.get('password') as string;

    if(!email || !password) return alert('Preencha todos os dados');

    const newUser = await login(email, password);
    
    setUser(newUser);    
    
    history.push('/hours');
    
    email = '';
    password = '';
  };
  
  user && setCookie(null, 'uid', user.uid, {
    maxAge: 60,
    path: '/'
  });

  return(
    <MainStyle>
      <p>Crie sua agenda compartilhada</p>
      <form onSubmit={(e) => handleClick(e)}>
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
};

export default InitialPage;