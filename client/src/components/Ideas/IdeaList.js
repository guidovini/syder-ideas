import React, { Component } from 'react'
import { connect } from 'react-redux'

import IdeaItem from 'components/Ideas/IdeaItem'
import { deleteIdea, changeToSummary } from 'actions'

export class IdeaList extends Component {
  handleDeleteIdea = ({ id }) => {
    this.props.dispatch(deleteIdea(id))
  }

  changeToSummary = () => {
    this.props.dispatch(changeToSummary())
  }

  render() {
    return (
      <div>
        {this.props.ideas.map((idea) => {
          return <IdeaItem 
                    key={idea.id} 
                    {...idea} 
                    handleDeleteIdea={this.handleDeleteIdea} 
                    changeToSummary={this.changeToSummary}
                  />
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(IdeaList)