import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import { saveType } from 'actions'


class CreateIdea extends Component {
  state = {
    type: 'Misc'
  }

  handleChange = (e) => {
    const type = e.target.value
    this.setState(() => ({ type }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(saveType(this.state.type))
    this.props.history.push('/create-idea-name')
  }

  // renderInfo = () => {
  //   if (this.props.ideas.idea.type) {
  //     console.log(this.props.ideas.idea.type)
  //   }
  // }

  // componentDidMount() {
  //   console.log('This is componentDidMount()')
  //   this.renderInfo()
  // }

  render() {
    return (
      <div>
        <Header />
        <h2>Let's begin!!</h2>
        <h3>What do you want to create?</h3>
        <form onSubmit={this.handleSubmit}>
          <label>
            <select value={this.state.type} onChange={this.handleChange}>
              <option name='web-app'>Web app</option>
              <option name='mobile-app'>Mobile app</option>
              <option name='book'>Book</option>
              <option name='business'>Business</option>
            </select>
          </label>
          <input type="submit" value="Continue" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    ideas: state.ideas
  }
}


export default connect(mapStateToProps)(CreateIdea)