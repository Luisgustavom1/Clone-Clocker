import React from 'react';

import logoLight from '../../assets/img/LogoLight.svg';
import logoDark from '../../assets/img/LogoDark.svg';
import { HeaderStyle } from './style';

const Header: React.FC = () => {
  return (
      <HeaderStyle>
          <img alt='Logo' src={logoLight}></img>
          <p>Crie sua agenda compartilhada</p>
      </HeaderStyle>
  );
}

export default Header;