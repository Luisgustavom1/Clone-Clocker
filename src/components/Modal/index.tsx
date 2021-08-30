import { FormEvent, useContext } from 'react';

import logoDark from '../../assets/img/logoDark.svg';
import logoLight from '../../assets/img/logoLight.svg';
import { Container, MainStyle } from './style';
import AppContext from '../../context/AppContext';
import { database } from '../../services/firebase';

type ModalProps = {
  setShowModal: (value: boolean) => void
  day?: string
  hour: string
}

const Modal = (props: ModalProps) => {
  const { theme } = useContext(AppContext);

  async function reserveTime(e: FormEvent | any) {
    e.preventDefault()    

    const data = new FormData(e.target);
    
    let name = data.get('nome');
    let tel = data.get('telefone');

    if(!name || !tel) return alert('Preenche todos os campos');

    await database.ref(`days/${Number(props.day) - 1}/hours/${props.hour}`).update({
      occupied: true,
      details: {
        name,
        tel
      }
    });
        
    alert(`Horário das ${props.hour} do dia ${props.day} marcado com sucesso para ${name}`);

    name = '';
    tel = '';
    props.setShowModal(false);
  };

  return (
      <Container>
          <section data-hour={props.hour}>
              <header>
                <img src={
                    theme.title === 'light' ? 
                    logoLight : 
                    logoDark
                } alt='logo'/>
                <i 
                  className="fas fa-times" 
                  onClick={() => props.setShowModal(false)}
                />
              </header>
              <MainStyle>
                    <p>Marcar horário das {props.hour}</p>
                    <form onSubmit={(e) => reserveTime(e)} className={props.day}>
                        <div>
                          <label htmlFor='nome'>Nome</label>
                          <input type="text" 
                            placeholder='Insira seu nome'
                            id='nome'
                            name='nome'
                          />
                        </div>
                        <div>
                          <label htmlFor='telefone'>Telefone</label>
                          <input type="text" 
                            placeholder='(99) 9 9999-9999'
                            id='telefone'
                            name='telefone'
                          />
                        </div>
                        <button 
                          type='submit'
                        >
                          Reserve Time
                        </button> 
                    </form>
               </MainStyle>
          </section>
      </Container>
  )
}

export default Modal;