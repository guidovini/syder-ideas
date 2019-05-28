import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startDeleteStrategy } from '../../../actions/strategies';
import StrategyEdit from './StrategyEdit';

class StrategyItem extends Component {
  onStrategyDelete = () => {
    this.props.dispatch(startDeleteStrategy(this.props.strategy));
  };

  render() {
    return (
      <div className="column">
        <div className="columns is-mobile">
          <div className="column">
            <StrategyEdit
              text={this.props.strategy.text}
              idea={this.props.idea}
              strategy={this.props.strategy}
            />
          </div>
          <div className="column is-narrow">
            <button
              onClick={this.onStrategyDelete}
              className="delete"
              type="button"
            >
              x
            </button>
          </div>
        </div>
      </div>
    );
  }
}

export default connect()(StrategyItem);
