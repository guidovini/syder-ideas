import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

import Header from 'components/Header'
import { saveName } from 'actions'

class CreateIdeaName extends Component {
  state = {
    name: ''
  }

  handleChange = (e) => {
    const name = e.target.value
    this.setState(() => ({ name }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.dispatch(saveName(this.state.name))
    this.props.history.push('/create-idea-description')
  }
  
  render() {
    return (
      <div>
        <Header />
        <h3>Insert the name of the idea</h3>
        <form onSubmit={this.handleSubmit}>
          <input 
            type="text" 
            placeholder="Catbook" 
            autoFocus 
            onChange={this.handleChange}
            value={this.state.name}/>
          <input type="submit" value="Continue" />
        </form>
        <Link to="/create-idea"><button>Back</button></Link>
      </div>
    )
  }
}

export default connect()(CreateIdeaName)