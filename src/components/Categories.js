import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Header from 'components/Header'
import Navigation from 'components/Navigation'

const FilterCategories = ({ ideas }) => {
  let categories = new Set([])
  ideas.forEach(idea => categories.add(idea.category))
  categories = [...categories]

  return (
    <div>
      {categories.map(category => {
        const conditions = ideas.filter(idea => idea.category === category)
        return (
          <div key={category}>
            <h3>{category}</h3>
            {conditions.map(condition => {
              return (
                <Link to={`/idea/${condition.id}`} key={condition.id}>
                  <h4>{condition.name}</h4>
                  <p>{condition.description}</p>
                </Link>
              )
            })}
          </div>
        )
      })}
    </div>
  )

}

export class Categories extends Component {
  render() {
    return (
      <div>
        <Header />
        <Navigation />
        <h2>Idea Categories</h2>
        <FilterCategories ideas={this.props.ideas}/>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(Categories)