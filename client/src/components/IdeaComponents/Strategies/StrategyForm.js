import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { startAddStrategy } from '../../../actions/strategies';

class StrategyForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      strategy: ''
    };
  }

  handleChange = e => {
    const strategy = e.target.value;
    this.setState(() => ({ strategy }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.strategy) {
      this.props.dispatch(
        startAddStrategy(this.props.idea.id, {
          id: uuid(),
          text: this.state.strategy
        })
      );
      this.setState({ strategy: '' });
    }
  };

  render() {
    return (
      <div className="column">
        <form
          onSubmit={this.handleSubmit}
          className="field has-addons columns is-mobile"
        >
          <div className="column">
            <input
              type="text"
              onChange={this.handleChange}
              value={this.state.strategy}
              className="input"
            />
          </div>
          <div className="column is-narrow">
            <input type="submit" value="Add" className="button is-primary" />
          </div>
        </form>
      </div>
    );
  }
}

// const mapStateToProps = (state, props) => {
//   // const id = props.match.params.id
//   return {
//     idea: state.ideas.find(idea => idea.id === state.id)
//   }
// }

export default connect()(StrategyForm);
