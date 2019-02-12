import React, { Component } from 'react'
import { connect } from 'react-redux'

import IdeaItem from 'components/Ideas/IdeaItem'
import { startDeleteIdea } from 'actions/ideas'
import { changeToSummary } from 'actions/menu'

export class IdeaList extends Component {
  handleDeleteIdea = ({ id }) => {
    this.props.dispatch(startDeleteIdea(id))
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