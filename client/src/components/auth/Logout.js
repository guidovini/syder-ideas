import React, { Component } from 'react';
import { connect } from 'react-redux';

import { logout } from '../../actions/auth';

class Logout extends Component {
  componentDidMount() {
    this.props.dispatch(logout());
  }

  render() {
    return (
      <div className="hero is-medium">
        <div className="hero-body">
          <div className="container">
            <h2 className="subtitle is-3">See you next time!</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(Logout);
