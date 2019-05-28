import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startEditInspiration } from 'actions/inspiration'

export class InspirationEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textToForm: false,
      text: props.text ? props.text : ''
    }
  }

  onInspirationEdit = () => {
    this.props.dispatch(startEditInspiration(this.props.idea.id, {
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
    this.onInspirationEdit()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({ textToForm: false })
      this.onInspirationEdit()
    }
  }

  render() {
    return (
        <div 
          onClick={this.handleFirstClick} 
          onBlur={this.handleBlur} 
          onKeyPress={this.handleKeyPress}
          className="box"
        >
          {this.state.textToForm 
            ? <input onChange={this.handleChange} 
                      autoFocus
                      type="text" 
                      value={this.state.text}
                      className="input"/> 
            : <p>{this.state.text}</p> }
        </div>
    )
  }
}

export default connect()(InspirationEdit)