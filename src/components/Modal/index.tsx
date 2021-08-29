import { FormEvent, useContext } from 'react';

import logoDark from '../../assets/img/logoDark.svg';
import logoLight from '../../assets/img/logoLight.svg';
import { Container, MainStyle } from './style';
import AppContext from '../../context/AppContext';
import { database } from '../../services/firebase';
import { displayPartsToString } from 'typescript';

type ModalProps = {
  setShowModal: (value: boolean) => void
  day: string
  hour: string
}

const Modal = (props: ModalProps) => {
  const { theme } = useContext(AppContext);

  async function reserveTime(e: FormEvent | any) {
    e.preventDefault()    

    const data = new FormData(e.target);
    
    const name = data.get('nome');
    const tel = data.get('telefone');

    // if(!name || !tel) return alert('Preenche todos os campos');

    // const databaseRef = await database.ref(`day/1/hours/09:00`).update({
    //   occupied: true,
    //   details: {
    //     name,
    //     tel
    //   }
    // });

    // await database.ref('/day').push({
    //     day: '28',
    //     hours: [
    //         {
    //             occupied: false,
    //             time: '08:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '09:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '10:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '11:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '12:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '13:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '14:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //         {
    //             occupied: false,
    //             time: '15:00',
    //             details: {
    //                 name: '',
    //                 tel: ''
    //             }
    //         },
    //     ]
    //   })

    await database.ref(`/day`)
      .on('value', (day) => {
        const days = day.val()
        
        const arrayDays: any = [];

        for(var [key, value] of Object.entries(days)) {
          arrayDays.push(value)
        }

        console.log(arrayDays);
        
      })
  };

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