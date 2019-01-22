import React from 'react'

import IdeaList from 'components/Ideas/IdeaList'
import Header from 'components/Header'

export default function Dashboard() {
  return (
    <div>
      <Header />
      <div>
        <IdeaList />
      </div>
    </div>
  )
}
