import React, { Component } from 'react'
import moment from 'moment'

export class IdeaForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
      name: props.idea ? props.idea.name : '',
      description: props.idea ? props.idea.description : '',
      target: props.idea ? props.idea.target : '',
      modifiedAt: moment()
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

  onSubmit = (e) => {
    e.preventDefault()
    this.props.onSubmit({
      name: this.state.name,
      description: this.state.description,
      target: this.state.target,
      modifiedAt: this.state.modifiedAt.valueOf()
    })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit}>
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
            type="text"
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
    )
  }
}

export default IdeaForm
