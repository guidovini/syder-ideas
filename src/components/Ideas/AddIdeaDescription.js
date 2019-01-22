import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Navigation from 'components/Navigation'
import IdeaForm from 'components/Ideas/IdeaForm'
import { addIdeaDescription } from 'actions'


class AddIdeaDescription extends Component {
  onSubmit = (idea) => {
    this.props.dispatch(addIdeaDescription(this.props.idea.id, idea))
    this.props.history.push('/done')
  }

  render() {
    return (
      <div>
        <Header />
        <Navigation idea={this.props.idea}/>
        <h2>Your idea is a: {this.props.idea.category}</h2>
        <IdeaForm 
          idea={this.props.idea}
          onSubmit={this.onSubmit}/>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  idea: state.ideas.find(idea => idea.id === props.match.params.id)
})

export default connect(mapStateToProps)(AddIdeaDescription)