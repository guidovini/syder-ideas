import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import { addIdeaInfo } from 'actions'

class AddIdeaInfo extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.idea ? props.idea.name : '',
      description: props.idea ? props.idea.description : '',
      target: props.idea ? props.idea.target : '',
    }
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
    this.props.dispatch(addIdeaInfo(this.props.idea.id, { 
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
        <h2>Your idea is a: {this.props.idea.category}</h2>
        <form onSubmit={this.handleSubmit}>
          <div>
            <h3>Insert the name of the idea</h3>
            <input 
              autoFocus
              type="text" 
              placeholder="Catbook" 
              onChange={this.handleNameChange}
              value={this.state.name}/>
          </div>

          <div>
            <h3>Insert a short description of your idea</h3>
            <textarea 
              placeholder="A social media platform for cats" 
              onChange={this.handleDescriptionChange}
              value={this.state.description}/>       
          </div>

          <div>
            <h3>Who is this app for?</h3>
            <input 
              type="text" 
              placeholder="Cats" 
              onChange={this.handleTargetChange}
              value={this.state.target}/>
          </div>

          <input type="submit" value="Finish" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  idea: state.ideas.find(idea => idea.id === props.match.params.id)
})

export default connect(mapStateToProps)(AddIdeaInfo)