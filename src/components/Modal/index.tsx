import { useContext } from 'react';

import logoDark from '../../assets/img/logoDark.svg';
import logoLight from '../../assets/img/logoLight.svg';
import { Container, MainStyle } from './style';
import AppContext from '../../context/AppContext';

type ModalProps = {
  setShowModal: (value: boolean) => void
}

const Modal = (props: ModalProps) => {
  const { theme } = useContext(AppContext);

  function reserveTime() {
    
  }

  return (
      <Container>
          <section>
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
                    <p>Marcar horário das 08:00</p>
                    <form>
                        <div>
                          <label htmlFor='nome'>Nome</label>
                          <input type="text" 
                            placeholder='Insira seu nome'
                            id='nome'
                            name='nome'
                          />
                        </div>
                        <div>
                          <label htmlFor='Telefone'>Telefone</label>
                          <input type="text" 
                            placeholder='(99) 9 9999-9999'
                            id='Telefone'
                            name='Telefone'
                          />
                        </div>
                        <button 
                          type='submit'
                          onClick={() => reserveTime()}
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