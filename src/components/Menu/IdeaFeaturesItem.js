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
      <div className="box">
        <div className="columns">
          <div className="column">
            <TextToForm text={this.props.feature.text} idea={this.props.idea} feature={this.props.feature} />
          </div>
          <div className="column">
            <button onClick={this.onFeatureDelete} className="delete">x</button>
          </div>        
        </div>
      </div>
    )
  }
}

export default connect()(IdeaFeaturesItem)