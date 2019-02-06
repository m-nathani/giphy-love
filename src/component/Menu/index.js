import React, { Component } from 'react';
import {
  Dropdown, Menu, Icon,
} from 'semantic-ui-react';
import { Link } from 'react-router';

export default class MenuDisplay extends Component {
  state = { activeItem: 'Home' }

  handleItemClick = (e, { name }) => this.setState({ activeItem: name })

  render() {
    const { actions, language, rating } = this.props;
    const { activeItem } = this.state;
    const languageOptions = [
      { key: 'en', value: 'en', text: 'English' },
      { key: 'fr', value: 'fr', text: 'French' },
      { key: 'es', value: 'es', text: 'Spanish' },
      { key: 'ar', value: 'ar', text: 'Arabic' },
      { key: 'de', value: 'de', text: 'German' },
      { key: 'zh-CN', value: 'zh-CN', text: 'Chinese' },
      { key: 'hi', value: 'hi', text: 'Hindi' },
      { key: 'ru', value: 'ru', text: 'Russian' },
    ];
    const ratingsOptions = [
      { key: 'all', value: 'all', text: 'All' },
      { key: 'y', value: 'Y', text: 'Young Audiences' },
      { key: 'g', value: 'G', text: 'General Audiences' },
      { key: 'pg', value: 'PG', text: 'Parental Guidance Suggested' },
      { key: 'pg-13', value: 'PG-13', text: 'Parents Strongly Cautioned' },
      { key: 'r', value: 'R', text: 'Restricted' },
    ];

    return (
      <Menu>
        <Menu.Item as={Link} to='/' name='Home' active={activeItem === 'Home'} onClick={this.handleItemClick} />
        <Menu.Item as={Link} to='/favorites'
          name='Favorite'
          active={activeItem === 'Favorite'}
          onClick={this.handleItemClick}
        />
        <Menu.Menu position='right'>
          <Menu.Item >
            <Icon name='world' />Language:
          </Menu.Item>
          <Dropdown
            defaultValue={language}
            options={languageOptions}
            selection
            placeholder='Language'
            onChange={(e, { value }) => { actions.setLanguage(value); }}
          />
          <Menu.Item >
            <Icon name='registered' />Rating:
          </Menu.Item>
          <Dropdown
            defaultValue={rating}
            options={ratingsOptions}
            selection
            placeholder='Rating'
            onChange={(e, { value }) => { actions.setRating(value); }}
          />
        </Menu.Menu>
      </Menu>
    );
  }
}
