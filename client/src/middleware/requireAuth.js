import React, { Component } from 'react';
import { connect } from 'react-redux';
import jwtDecode from 'jwt-decode';

export default ChildComponent => {
  class ComposedComponent extends Component {
    componentDidMount() {
      this.shouldNavigateAway();
    }

    componentDidUpdate() {
      this.shouldNavigateAway();
    }

    shouldNavigateAway() {
      const { auth, history } = this.props;
      let decoded = '';
      try {
        decoded = jwtDecode(auth);
      } catch (e) {
        console.log('INVALID TOKEN', e);
        localStorage.removeItem('token');
        decoded = '';
      }

      if (!decoded) {
        history.push('/');
      }
    }

    render() {
      return <ChildComponent {...this.props} />;
    }
  }

  const mapStateToProps = state => ({
    auth: state.auth.authenticated
  });

  return connect(mapStateToProps)(ComposedComponent);
};
