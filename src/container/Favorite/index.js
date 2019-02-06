import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RootActions from 'action/root';
import Gallery from 'component/Gallery';
import Footer from 'component/Footer';
import Menu from 'component/Menu';
import { Segment } from 'semantic-ui-react';

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(RootActions, dispatch) };
}

class Favorite extends Component {
  render() {
    const { root, actions } = this.props;
    return (
      <Segment basic textAlign='center'>
          <Menu {...root} actions={actions} />
          <Gallery actions={actions} {...root} isFavoriteRoute={true} />
          <Footer />
      </Segment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favorite);
