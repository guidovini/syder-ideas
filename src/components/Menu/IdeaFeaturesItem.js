import React, { Component } from 'react'
import { connect } from 'react-redux';

export class IdeaFeaturesItem extends Component {
  onFeatureEdit = () => {
    // this.props.dispatch(editFeature(this.props.idea.feature.map))
    console.log(`Edit feature for ${this.props.feature.id}`)
  }

  onFeatureDelete = () => {
    console.log(`Delete feature for ${this.props.feature.id}`)
  }

  render() {
    return (
      <div>
        <p> - {this.props.feature.text}</p>
        <button onClick={this.onFeatureEdit}>edit</button>
        <button onClick={this.onFeatureDelete}>x</button>
      </div>
    )
  }
}

export default connect()(IdeaFeaturesItem)