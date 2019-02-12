import React, { Component } from 'react'
import { connect } from 'react-redux'

import TextToForm from 'components/Menu/TextToForm' 
import { startDeleteFeature }  from 'actions/features'

export class IdeaFeaturesItem extends Component {
  onFeatureDelete = () => {
    this.props.dispatch(startDeleteFeature(this.props.feature))
  }

  render() {
    return (
      <div className="column">
        <div className="columns is-mobile">
          <div className="column">
            <TextToForm text={this.props.feature.text} idea={this.props.idea} feature={this.props.feature} />
          </div>
          <div className="column is-narrow">
            <button onClick={this.onFeatureDelete} className="delete">x</button>
          </div>        
        </div>
      </div>
    )
  }
}

export default connect()(IdeaFeaturesItem)