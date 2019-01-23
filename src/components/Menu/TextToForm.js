import React, { Component } from 'react'
import { connect } from 'react-redux'

import { editFeature } from 'actions'

export class TextToForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textToForm: false,
      text: props.text ? props.text : ''
    }
  }

  onFeatureEdit = () => {
    // this.props.dispatch(editFeature(this.props.idea.feature.map))
    // console.log(`Edit feature for ${this.props.feature.id}`)
    this.props.dispatch(editFeature(this.props.idea.id, {
      id: this.props.feature.id,
      text: this.state.text
    }))
  }

  handleChange = (e) => {
    const text = e.target.value
    this.setState({ text })
  }

  handleFirstClick = () => {
    this.setState({ textToForm: true })
  }

  handleBlur = () => {
    this.setState({ textToForm: false })
    this.onFeatureEdit()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({ textToForm: false })
      this.onFeatureEdit()
    }
  }

  render() {
    return (
        <div onClick={this.handleFirstClick} onBlur={this.handleBlur} onKeyPress={this.handleKeyPress}>
          {this.state.textToForm ? <input onChange={this.handleChange} 
                                          autoFocus
                                          type="text" 
                                          value={this.state.text}/> 
                                  : <p>{this.state.text}</p> }
        </div>
    )
  }
}

export default connect()(TextToForm)