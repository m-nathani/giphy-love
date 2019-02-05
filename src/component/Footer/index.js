import React from 'react';
import { Segment, Label, Icon } from 'semantic-ui-react';

const Footer = () => (
  <Segment basic>
    <Label color="blue" attached="bottom right" >
      <Icon name='copyright outline'/>Copyright    <Icon name='at'/>Murtaza Nathani
    </Label>
  </Segment>
);

export default Footer;
