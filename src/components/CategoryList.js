import React, { Component } from 'react'
import { connect } from 'react-redux'

import CategoryItem from 'components/CategoryItem'

export class CategoryList extends Component {
  render() {
    let categories = new Set([])
    this.props.ideas.forEach(idea => categories.add(idea.category))
    categories = [...categories]
  
    return (
      <div>
        {categories.map(category => {
          const conditions = this.props.ideas.filter(idea => idea.category === category)
          return (
            <div key={category}>
              <h3 className="title is-5">{category}</h3>
              {conditions.map(condition => {
                return (
                  <CategoryItem {...condition} />
                )
              })}
            </div>
          )
        })}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(CategoryList)
