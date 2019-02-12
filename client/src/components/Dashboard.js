import React from 'react'

import IdeaList from 'components/Ideas/IdeaList'
import Header from 'components/Header'
import FilterIdeasBar from 'components/filters/FilterIdeasBar'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="section">
        <div className="container">
          <h2 className="title is-4">Dashboard</h2>
          <FilterIdeasBar />
          <IdeaList />
        </div>
      </div>
    </div>
  )
}
