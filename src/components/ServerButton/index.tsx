import React from 'react';

import Logo from '../../assets/logo.svg';
import { Button } from './styles';

export interface Props {
  selected?: boolean;
  isHome?: boolean;
  hasNotification?: boolean;
  mentions?: number;
}

const ServerButton: React.FC<Props> = ({
  selected,
  isHome,
  hasNotification,
  mentions,
}) => {
  return (
    <Button
      className={selected ? 'active' : ''}
      isHome={isHome}
      hasNotification={hasNotification}
      mentions={mentions}
    >
      {isHome && <img src={Logo} alt="Rocketseat" />}
    </Button>
  );
};

export default ServerButton;
