import React, { Component } from 'react'
import { connect } from 'react-redux'

import StrategyItem from './StrategyItem'
import { startSetStrategies } from 'actions/strategies'

export class StrategiesList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetStrategies())
  }

  render() {
    return (
      <div>
        {this.props.strategies.map(strategy => {
          if (this.props.idea.id === strategy.ideaId) {
            return <StrategyItem 
                      key={strategy.id} 
                      idea={this.props.idea} 
                      strategy={strategy} />
          } else {
            return ''
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  strategies: state.strategies
})

export default connect(mapStateToProps)(StrategiesList)