import React, { Component } from 'react';
import { connect } from 'react-redux';
import uuid from 'uuid/v4';

import { startAddInspiration } from '../../../actions/inspiration';

class InspirationForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Inspiration: ''
    };
  }

  handleChange = e => {
    const Inspiration = e.target.value;
    this.setState(() => ({ Inspiration }));
  };

  handleSubmit = e => {
    e.preventDefault();
    if (this.state.Inspiration) {
      this.props.dispatch(
        startAddInspiration(this.props.idea.id, {
          id: uuid(),
          text: this.state.Inspiration
        })
      );
      this.setState({ Inspiration: '' });
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
              value={this.state.Inspiration}
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

export default connect()(InspirationForm);
