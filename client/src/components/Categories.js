import React from 'react'

import CategoryList from 'components/CategoryList'
import requireAuth from '../middleware/requireAuth';

const Categories = () => {
  return (
    <div>
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h2 className="title is-4">Idea Categories</h2>
            <CategoryList/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default requireAuth(Categories)