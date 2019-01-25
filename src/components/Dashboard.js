import React from 'react'

import IdeaList from 'components/Ideas/IdeaList'
import Header from 'components/Header'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div className="container">
        <h2 className="title is-4">Dashboard</h2>
        <IdeaList />
      </div>
    </div>
  )
}
