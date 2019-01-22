import React, { Component } from 'react'
import IdeaFeaturesItem from 'components/Menu/IdeaFeaturesItem'

export class IdeaFeaturesList extends Component {
  render() {
    return (
      <div>
        {this.props.idea.features.map(feature => <IdeaFeaturesItem key={feature.id} feature={feature} />)}
      </div>
    )
  }
}

export default IdeaFeaturesList