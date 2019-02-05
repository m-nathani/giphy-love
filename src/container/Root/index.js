import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as RootActions from 'action/root';
import Gallery from 'component/Gallery';
import Header from 'component/Header';
import Footer from 'component/Footer';
import {
  Divider, Segment,
} from 'semantic-ui-react';

function mapStateToProps(state) {
  return state;
}
function mapDispatchToProps(dispatch) {
  return { actions: bindActionCreators(RootActions, dispatch) };
}

class Root extends Component {
  render() {
    const { root, actions } = this.props;
    return (
      <Segment basic textAlign='center'>
          <Header actions={actions} searchTerm={root.searchTerm} showProfile={root.showProfile}
                  isLoading={root.isLoading} />
          <Divider horizontal />
          <Gallery actions={actions} {...root} />
          <Footer />
      </Segment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Root);
