import React, { Component } from 'react'
import { connect } from 'react-redux'
import uuid from 'uuid/v4'

import Header from 'components/Header'
import { addIdea } from 'actions'


class AddIdea extends Component {
  state = {
    category: 'web-app',
  }

  handleCategoryChange = (e) => {
    const category = e.target.value
    this.setState(() => ({ category }))
  }


  handleSubmit = (e) => {
    e.preventDefault()
    const id = uuid()
    this.props.dispatch(addIdea({
      id,
      category: this.state.category
    }))
    this.props.history.push(`/edit/${id}`)  
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
              <option value='web-app'>Web App</option>
              <option value='mobile-app'>Mobile App</option>
              <option value='book'>Book</option>
              <option value='business'>Business</option>
              <option value='product'>Physical Product</option>
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