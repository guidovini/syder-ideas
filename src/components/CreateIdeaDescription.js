import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from 'components/Header'
import { saveDescription } from 'actions'

class CreateIdeaDescription extends Component {
  state = {
    description: '',
    target: ''
  }

  handleDescriptionChange = (e) => {
    const description = e.target.value
    this.setState(() => ({ description }))
  }

  handleTargetChange = (e) => {
    const target = e.target.value
    this.setState(() => ({ target }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(saveDescription(this.state.description, this.state.target))
    this.props.history.push('/dashboard')  
  }

  render() {
    return (
      <div>
        <Header />
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Insert a short description of your idea</h3>
            <textarea 
              name="description" 
              placeholder="A social media platform for cats" 
              autoFocus 
              value={this.state.description}
              onChange={this.handleDescriptionChange}/>
          </div>
          <div>
            <h3>Who is this app for?</h3>
            <input 
              name="target" 
              type="text" 
              placeholder="Cats" 
              value={this.state.ideaTarget}
              onChange={this.handleTargetChange}/>
          </div>
          <input type="submit" value="Finish"/>
        </form>
        <Link to="/create-idea-name"><button>Back</button></Link>
      </div>
    )
  }
}

export default connect()(CreateIdeaDescription)