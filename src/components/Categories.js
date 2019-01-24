import React from 'react'

import Header from 'components/Header'
import Navigation from 'components/Navigation'
import CategoryList from 'components/CategoryList'

export default function Categories() {
  return (
    <div>
      <Header />
      <Navigation />
      <h2>Idea Categories</h2>
      <CategoryList/>
    </div>
  )
}