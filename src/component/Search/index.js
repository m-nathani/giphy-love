import React from 'react';
import {
  Input, Header, Icon, Segment, Button,
} from 'semantic-ui-react';

export default class Search extends React.Component {
  render() {
    const {
      actions, searchTerm, isLoading, showProfile,
    } = this.props;
    return (
        <Segment placeholder>
          <Header icon>
            <Icon name='search' />
            For the love of Giphs !.
          </Header>
          <Segment.Inline>
            <Input value={searchTerm} type='text' size="large" placeholder='Search giph...'
                  loading={isLoading} onChange={(e) => { actions.updateSearchTerm(e.target.value); }}
                  onKeyPress={(e) => { if (e.key === 'Enter') actions.fetchGighyData(); }}
                  icon='search' iconPosition='left'
                  action={{
                    primary: true,
                    content: 'Search',
                    onClick: actions.fetchGighyData,
                    tabIndex: '1',
                    color: 'blue',
                    inverted: true,
                    loading: isLoading,
                  }} />
          </Segment.Inline>
          <div>
            <Button size="mini" floated="right" secondary onClick={actions.toggleShowProfile}>
                <Icon size="large" name='user secret' /> {showProfile ? 'Hide' : 'Show'} Profile
            </Button>
          </div>
        </Segment>
    );
  }
}
