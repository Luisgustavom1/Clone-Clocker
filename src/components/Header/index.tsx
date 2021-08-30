import React from 'react';

import logoLight from '../../assets/img/logoLight.svg';
import logoDark from '../../assets/img/logoDark.svg';
import { HeaderStyle } from './styles';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';
import { light, dark } from '../../styles/theme';

const Header: React.FC = () => {
  const { theme, setTheme} = useContext(AppContext)
  console.log(theme);
  
  return (
      <HeaderStyle>
          <img alt='Logo' src={theme.title === 'light' ? logoLight : logoDark}/>
          <div onClick={() => setTheme(theme.title === 'light' ? dark : light)}>
            {theme.title === 'light' ? 
              <i className="fas fa-moon"></i> : 
              <i className="fas fa-sun"></i>
            }
          </div>
      </HeaderStyle>
  );
}

export default Header;