import React from 'react';
import ServerButton from '../ServerButton';
import { Container, Separator } from './styles';

const ServerList: React.FC = () => {
  return (
    <Container>
      <ServerButton isHome />
      <Separator />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton mentions={3} />
      <ServerButton />
      <ServerButton />
      <ServerButton hasNotification />
      <ServerButton />
      <ServerButton mentions={5} />
      <ServerButton />
      <ServerButton />
      <ServerButton />
    </Container>
  );
};

export default ServerList;
