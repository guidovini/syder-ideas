import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import IdeaItem from 'components/Ideas/IdeaItem'
import { startDeleteIdea } from 'actions/ideas'
import { startFavoriteIdea } from 'actions/ideas'
import { startArchiveIdea } from 'actions/ideas'
import { startSetIdeas } from 'actions/ideas'
import { changeToSummary } from 'actions/menu'
import selectIdeas from 'selectors/ideas'

class IdeaList extends Component {
  handleDeleteIdea = ({ id }) => {
    this.props.dispatch(startDeleteIdea(id))
  }

  handleFavoriteIdea = ({ id }) => {
    this.props.dispatch(startFavoriteIdea(id))
  }

  handleArchiveIdea = ({ id }) => {
    this.props.dispatch(startArchiveIdea(id))
  }

  changeToSummary = () => {
    this.props.dispatch(changeToSummary())
  }
  
  componentDidMount() {
    this.props.dispatch(startSetIdeas())
  }

  render() {
    if (this.props.ideas.length && this.props.ideas[0].id) {
      return (
        <div>
          {this.props.ideas.map((idea) => 
            <IdeaItem 
              key={idea.id} 
              {...idea} 
              handleDeleteIdea={this.handleDeleteIdea}
              handleFavoriteIdea={this.handleFavoriteIdea}
              handleArchiveIdea={this.handleArchiveIdea} 
              changeToSummary={this.changeToSummary}
            />
          )}
          <Link to="/create" className="box has-background-grey-lighter">
            <p className="title is-3 has-text-grey has-text-centered">+</p>
          </Link>
        </div>
      )
    } else {
      return (
        <div>
          <div className="section">
          {
            this.props.filterVisibility === 'favorite' 
              ? <p className="subtitle is-3 has-text-centered has-text-dark">There are no favorite ideas</p>
              : this.props.filterVisibility === 'archive' 
                ? <p className="subtitle is-3 has-text-centered has-text-success">There are no archived ideas</p>
                : <p className="subtitle is-3 has-text-centered has-text-link">Add some ideas!</p>
          }
            
          </div>

          <div>
            <Link to="/create" className="box has-background-grey-lighter">
              <p className="title is-3 has-text-grey has-text-centered">+</p>
            </Link>
          </div>
        </div>
      )
    }
  }
}

const mapStateToProps = (state) => ({
  ideas: selectIdeas(state.ideas, state.filters),
  filterVisibility: state.filters.filterVisibility
})

export default connect(mapStateToProps)(IdeaList)