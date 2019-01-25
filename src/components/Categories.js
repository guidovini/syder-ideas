import React from 'react'

import Header from 'components/Header'
import CategoryList from 'components/CategoryList'

export default function Categories() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title is-4">Idea Categories</h2>
        <CategoryList/>
      </div>
    </div>
  )
}