import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import IdeaItem from 'components/Ideas/IdeaItem'
import { startDeleteIdea } from 'actions/ideas'
import { changeToSummary } from 'actions/menu'
import selectIdeas from 'selectors/ideas'
import { startSetIdeas } from 'actions/ideas'

export class IdeaList extends Component {
  handleDeleteIdea = ({ id }) => {
    this.props.dispatch(startDeleteIdea(id))
  }

  changeToSummary = () => {
    this.props.dispatch(changeToSummary())
  }
  
  componentDidMount() {
    this.props.dispatch(startSetIdeas())
  }

  render() {
    if (this.props.ideas.length) {
      return (
        <div>
          {this.props.ideas.map((idea) => 
            <IdeaItem 
              key={idea.id} 
              {...idea} 
              handleDeleteIdea={this.handleDeleteIdea} 
              changeToSummary={this.changeToSummary}
            />
          )}
        </div>
      )
    } else {
      return (
        <div>
          <div className="section">
            <p className="subtitle is-3 has-text-centered has-text-link">Add some ideas!</p>
          </div>

          <div className="section">
            <Link to="/create" className="box">
              <p className="title is-4 has-text-grey has-text-centered">+</p>
            </Link>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  ideas: selectIdeas(state.ideas, state.filters)
})

export default connect(mapStateToProps)(IdeaList)