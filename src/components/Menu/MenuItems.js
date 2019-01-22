import React, { Component } from 'react'
import { connect } from 'react-redux'

import { changeToSummary, changeToFeatures, changeToStrategies, changeToInspiration, changeToBusinessModel, changeToPlanning, changeToResources } from 'actions'

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
        <ul>
          <li onClick={this.onSummaryClick}>Summary</li>
          <li onClick={this.onFeaturesClick}>Features List</li>
          <li onClick={this.onStrategiesClick}>Marketing Strategies</li>
          <li onClick={this.onInspirationClick}>Product Inspiration</li>
          <li onClick={this.onBusinessModelClick}>Business Model</li>
          <li onClick={this.onPlanningClick}>Timeline</li>
          <li onClick={this.onResourcesClick}>Resources</li>
        </ul>
      </div>
    )
  }
}

export default connect()(MenuItems)