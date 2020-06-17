import React from 'react';
import ChannelButton from '../ChannelButton';
import { Container, Category, AddCategoryIcon } from './styles';

const ChannelList: React.FC = () => {
  return (
    <Container>
      <Category>
        <span>Canais de texto</span>
        <AddCategoryIcon />
      </Category>
      <ChannelButton channelName="channel #1" />
      <ChannelButton channelName="channel #2" />
      <ChannelButton channelName="channel #3" />
      <ChannelButton channelName="channel #4" />
      <ChannelButton channelName="channel #5" />
      <ChannelButton channelName="channel #6" />
    </Container>
  );
};

export default ChannelList;
