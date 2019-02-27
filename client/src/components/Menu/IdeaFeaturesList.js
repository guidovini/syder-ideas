import React, { Component } from 'react'
import { connect } from 'react-redux'

import IdeaFeaturesItem from 'components/Menu/IdeaFeaturesItem'
import { startSetFeatures } from 'actions/features'

export class IdeaFeaturesList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetFeatures())
  }

  render() {
    return (
      <div>
        {this.props.features.map(feature => {
          if (this.props.idea.id === feature.ideaId) {
            return <IdeaFeaturesItem 
                      key={feature.id} 
                      idea={this.props.idea} 
                      feature={feature} />
          } else {
            return ''
          }
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  features: state.features
})

export default connect(mapStateToProps)(IdeaFeaturesList)