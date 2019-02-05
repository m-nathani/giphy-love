import React from 'react';
import {
  Sidebar, Menu, Icon, Segment,
} from 'semantic-ui-react';
import Search from 'component/Search';

export default class Social extends React.Component {
  render() {
    const { showProfile } = this.props;
    return (
        <Sidebar.Pushable as={Segment}>
          <Sidebar as={Menu}
              animation="slide along"
              direction='left'
              icon='labeled'
              inverted
              vertical
              visible={showProfile}
              width='thin'
          animation='overlay' icon='labeled' inverted width='thin'>
            <Menu.Item as='a' href="https://github.com/m-nathani" target="_blank" >
              <Icon name='github' />
              Github
            </Menu.Item>
            <Menu.Item as='a' href="https://www.linkedin.com/in/murtazanathani/" target="_blank" >
              <Icon name='linkedin' />
              Linkedin
            </Menu.Item>
            <Menu.Item as='a'href="https://www.instagram.com/murtaza_nathani/" target="_blank" >
              <Icon name='instagram' />
              Instagram
            </Menu.Item>
            <Menu.Item as='a' href="https://www.facebook.com/murtaza.nathani" target="_blank" >
              <Icon name='facebook' />
              Facebook
            </Menu.Item>
            <Menu.Item as='a'href="https://twitter.com/mudza252" target="_blank" >
              <Icon name='twitter' />
              Twitter
            </Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Search {...this.props} ></Search>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
    );
  }
}
