import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import moment from 'moment'

import Header from 'components/Header'
import { addIdea } from 'actions'


class AddIdea extends Component {
  state = {
    category: 'Web App',
  }

  handleCategoryChange = (e) => {
    const category = e.target.value
    this.setState(() => ({ category }))
  }

  handleSubmit = (e) => {
    e.preventDefault()
    const id = uuid()
    const createdAt = moment().valueOf()
    this.props.dispatch(addIdea({
      id,
      category: this.state.category,
      createdAt
    }))
    this.props.history.push(`/create/${id}`)  
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
              <option value='Web App'>Web App</option>
              <option value='Mobile App'>Mobile App</option>
              <option value='Book'>Book</option>
              <option value='Business'>Business</option>
              <option value='Physical Product'>Physical Product</option>
            </select>
          </div>

          <input type="submit" value="Continue" />
        </form>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(AddIdea)