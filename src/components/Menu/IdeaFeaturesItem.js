import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextToForm from 'components/Menu/TextToForm' 
import { deleteFeature }  from 'actions'

export class IdeaFeaturesItem extends Component {
  onFeatureDelete = () => {
    this.props.dispatch(deleteFeature(this.props.feature))
  }

  render() {
    return (
      <div>
        <TextToForm text={this.props.feature.text} idea={this.props.idea} feature={this.props.feature} />
        <button onClick={this.onFeatureDelete}>x</button>
      </div>
    )
  }
}

export default connect()(IdeaFeaturesItem)