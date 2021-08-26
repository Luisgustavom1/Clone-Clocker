import React from 'react';

import logoLight from '../../assets/img/logoLight.svg';
import logoDark from '../../assets/img/logoDark.svg';
import { HeaderStyle } from './styles';
import { useContext } from 'react';
import AppContext from '../../context/AppContext';

const Header: React.FC = () => {
  const { theme } = useContext(AppContext)

  return (
      <HeaderStyle>
          <img alt='Logo' src={theme.title === 'light' ? logoLight : logoDark}></img>
      </HeaderStyle>
  );
}

export default Header;