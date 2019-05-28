import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startSetStrategies } from '../../../actions/strategies';
import StrategyItem from './StrategyItem';

class StrategiesList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetStrategies());
  }

  render() {
    return (
      <div>
        {this.props.strategies.map(strategy => {
          if (this.props.idea.id === strategy.ideaId) {
            return (
              <StrategyItem
                key={strategy.id}
                idea={this.props.idea}
                strategy={strategy}
              />
            );
          }
          return '';
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  strategies: state.strategies
});

export default connect(mapStateToProps)(StrategiesList);
