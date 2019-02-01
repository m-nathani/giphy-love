import React, { Component, PropTypes } from 'react';

import style from './style.scss';

export default class Listing extends Component {
  render() {
    const { text } = this.props;
    return (
      <div className={style.text}>
        {text}
      </div>
    );
  }
}

Listing.propTypes = {
  text: PropTypes.string.isRequired,
};
