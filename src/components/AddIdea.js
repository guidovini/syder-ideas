import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import { addIdea } from 'actions'


class AddIdea extends Component {
  state = {
    category: 'Web App',
    name: '',
    description: '',
    target: ''
  }

  handleCategoryChange = (e) => {
    const category = e.target.value
    this.setState(() => ({ category }))
  }

  handleNameChange = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }))
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
    this.props.dispatch(addIdea({ 
      category: this.state.category,
      name: this.state.name,
      description: this.state.description,
      target: this.state.target
    }))
    this.props.history.push('/done')  
  }

  render() {
    return (
      <div>
        <Header />
        <h2>Let's begin!!</h2>
        <form onSubmit={this.handleSubmit}>
          <div> 
            <h3>What do you want to create?</h3>
            <select value={this.state.category} onChange={this.handleCategoryChange}>
              <option name='web-app'>Web App</option>
              <option name='mobile-app'>Mobile App</option>
              <option name='book'>Book</option>
              <option name='business'>Business</option>
            </select>
          </div>

          <div>
            <h3>Insert the name of the idea</h3>
            <input 
              type="text" 
              placeholder="Catbook" 
              autoFocus 
              onChange={this.handleNameChange}
              value={this.state.name}/>
          </div>

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

          <input type="submit" value="Finish" />
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


export default connect(mapStateToProps)(AddIdea)