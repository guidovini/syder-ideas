import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'
import moment from 'moment'

import Header from 'components/Header'
import { startAddIdea } from 'actions/ideas'


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
    this.props.dispatch(startAddIdea({
      id,
      category: this.state.category,
      createdAt
    }))
    this.props.history.push(`/create/${id}`)  
  }

  render() {
    return (
      <div>
        <div className="hero">
          <div className="hero-body">
            <div className="container">
              <h2 className="title is-4">Let's begin!!</h2>
              <form onSubmit={this.handleSubmit}>
                <div className="column"> 
                  <h3 className="title is-5">What do you want to create?</h3>
                  <div className="select is-medium">
                    <select value={this.state.category} onChange={this.handleCategoryChange}>
                      <option value='Web App'>Web App</option>
                      <option value='Mobile App'>Mobile App</option>
                      <option value='Book'>Book</option>
                      <option value='Business'>Business</option>
                      <option value='Physical Product'>Physical Product</option>
                    </select>
                  </div>
                </div>
                <div className="column">
                  <input type="submit" value="Continue" className="button is-link" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(AddIdea)