import React, { Component } from 'react'
import { connect } from 'react-redux'

import { 
  changeToSummary, 
  changeToFeatures, 
  changeToStrategies, 
  changeToInspiration, 
  changeToBusinessModel, 
  changeToPlanning, 
  changeToResources 
} from 'actions/menu'

export class MenuItems extends Component {
  onSummaryClick = () => {
    this.props.dispatch(changeToSummary())
  }

  onFeaturesClick = () => {
    this.props.dispatch(changeToFeatures())
  }

  onStrategiesClick = () => {
    this.props.dispatch(changeToStrategies())
  }

  onInspirationClick = () => {
    this.props.dispatch(changeToInspiration())
  }

  onBusinessModelClick = () => {
    this.props.dispatch(changeToBusinessModel())
  }

  onPlanningClick = () => {
    this.props.dispatch(changeToPlanning())
  }

  onResourcesClick = () => {
    this.props.dispatch(changeToResources())
  }


  render() {
    return (
      <div>
        <button onClick={this.onSummaryClick} className="button is-normal is-link is-inverted is-fullwidth">Summary</button>
        <button onClick={this.onFeaturesClick} className="button is-normal is-link is-inverted is-fullwidth">Features List</button>
        <button onClick={this.onStrategiesClick} className="button is-normal is-link is-inverted is-fullwidth">Marketing Strategies</button>
        <button onClick={this.onInspirationClick} className="button is-normal is-link is-inverted is-fullwidth">Product Inspiration</button>
        <button onClick={this.onBusinessModelClick} className="button is-normal is-link is-inverted is-fullwidth">Business Model</button>
        <button onClick={this.onPlanningClick} className="button is-normal is-link is-inverted is-fullwidth">Timeline</button>
        <button onClick={this.onResourcesClick} className="button is-normal is-link is-inverted is-fullwidth">Resources</button>
      </div>
    )
  }
}

export default connect()(MenuItems)