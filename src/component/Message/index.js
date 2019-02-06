import React from 'react';
import { Message, Segment, Image } from 'semantic-ui-react';

export const NoResult = props => (
  <Segment textAlign="left">
    <Message
      floating={true}
      info={true}
      icon="searchengin"
      header='No Love Found :('
      content= {`There is no giph name or alias similar to "${props.searchTerm}". !`}
    />
    <Image src="images/no-result-found.gif"/>
  </Segment>
);

export const Searching = props => (
  <Segment textAlign="left">
    <Message
      floating={true}
      info={true}
      icon="heartbeat"
      header= {props.isFavoriteRoute ? 'No Favorite Love Found :)' : 'Please Search !'}
      content='We are fetching that content for you, keep on the Search for the Love of Giphs!'
    />
    <Image src="images/search.gif"/>
  </Segment>
);
