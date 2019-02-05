import React, { Component } from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import IdeaForm from 'components/Ideas/IdeaForm'
import { startAddIdeaDescription } from 'actions'


class AddIdeaDescription extends Component {
  onSubmit = (idea) => {
    this.props.dispatch(startAddIdeaDescription(this.props.idea.id, idea))
    this.props.history.push('/done')
  }

  render() {
    return (
      <div>
        <Header />
        <div className="section">
          <div className="container">
            <h2 className="title is-5">Your idea is a: {this.props.idea.category}</h2>
            <IdeaForm 
              idea={this.props.idea}
              onSubmit={this.onSubmit}/>
          </div>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state, props) => ({
  idea: state.ideas.find(idea => idea.id === props.match.params.id)
})

export default connect(mapStateToProps)(AddIdeaDescription)