import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import { startAddFeature } from 'actions/features'

export class IdeaFeaturesForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      feature: '',
    }
  }

  handleFeatureChange = (e) => {
    const feature = e.target.value
    this.setState(() => ({ feature }))
  }

  handleFeatureSubmit = (e) => {
    e.preventDefault()
    if (this.state.feature) {
      this.props.dispatch(startAddFeature(this.props.idea.id, {
        id: uuid(),
        text: this.state.feature,
      }))
      this.setState({feature: ''})
    }
  }

  render() {
    return (
      <div className="column">
        <form onSubmit={this.handleFeatureSubmit} className="field has-addons columns is-mobile">
          <div className="column">
            <input 
              type="text" 
              onChange={this.handleFeatureChange}
              value={this.state.feature}
              className="input" />
          </div>
          <div className="column is-narrow">
            <input 
              type="submit"
              value="Add"
              className="button is-primary"/> 
          </div>
        </form>   
      </div>
    )
  }
}

// const mapStateToProps = (state, props) => {
//   // const id = props.match.params.id
//   return {
//     idea: state.ideas.find(idea => idea.id === state.id)
//   }
// }

export default connect()(IdeaFeaturesForm)