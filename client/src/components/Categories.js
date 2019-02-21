import React from 'react'

import CategoryList from 'components/CategoryList'

export default function Categories() {
  return (
    <div>
      <div className="section">
        <div className="container">
          <h2 className="title is-4">Idea Categories</h2>
          <CategoryList/>
        </div>
      </div>
    </div>
  )
}