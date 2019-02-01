import React, { Component, PropTypes } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';

import * as RootActions from 'action/root';
import Listing from 'component/Listing';

function mapStateToProps(state) {
  return { text: state.root.text };
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(RootActions, dispatch) };
}

class Root extends Component {
  render() {
    const { text } = this.props;
    return (
      <Listing text={text}/>
    );
  }
}

Root.propTypes = {
  actions: PropTypes.object.isRequired,
};

export default connect(mapStateToProps, mapDispatchToProps)(Root);
