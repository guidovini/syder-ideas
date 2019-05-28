import React, { Component } from 'react'
import { connect } from 'react-redux'

import { startEditStrategy } from 'actions/strategies'

export class StrategyEdit extends Component {
  constructor(props) {
    super(props)

    this.state = {
      textToForm: false,
      text: props.text ? props.text : ''
    }
  }

  onStrategyEdit = () => {
    this.props.dispatch(startEditStrategy(this.props.idea.id, {
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
    this.onStrategyEdit()
  }

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.setState({ textToForm: false })
      this.onStrategyEdit()
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

export default connect()(StrategyEdit)