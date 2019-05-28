import React, { Component } from 'react';
import moment from 'moment';

class IdeaForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: props.idea ? props.idea.name : '',
      description: props.idea ? props.idea.description : '',
      target: props.idea ? props.idea.target : ''
      // lastEdited: moment().format('YYYY-MM-DD HH:mm:ss.SSS')
    };
  }

  handleNameChange = e => {
    const name = e.target.value;
    this.setState({ name });
  };

  handleDescriptionChange = e => {
    const description = e.target.value;
    this.setState({ description });
  };

  handleTargetChange = e => {
    const target = e.target.value;
    this.setState({ target });
  };

  onSubmit = e => {
    e.preventDefault();
    this.props.onSubmit({
      name: this.state.name,
      description: this.state.description,
      target: this.state.target,
      lastEdited: moment().format('YYYY-MM-DD HH:mm:ss.SSS')
    });
  };

  render() {
    return (
      <form onSubmit={this.onSubmit}>
        <div className="field">
          <label className="label">Insert the name of the idea</label>
          <div className="control">
            <input
              // autoFocus
              type="text"
              placeholder="Name of your idea"
              onChange={this.handleNameChange}
              value={this.state.name}
              className="input"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">
            Insert a short description of your idea
          </label>
          <div className="control">
            <textarea
              placeholder="Description of your idea"
              onChange={this.handleDescriptionChange}
              value={this.state.description}
              className="textarea"
            />
          </div>
        </div>

        <div className="field">
          <label className="label">Who is this app for?</label>
          <div className="control">
            <input
              type="text"
              placeholder="Target of your idea"
              onChange={this.handleTargetChange}
              value={this.state.target}
              className="input"
            />
          </div>
        </div>

        <div className="control">
          <input type="submit" value="Finish" className="button is-link" />
        </div>
      </form>
    );
  }
}

export default IdeaForm;
