import React from 'react'

import Menu from 'components/Menu'
import IdeaList from 'components/IdeaList'
import Options from 'components/Options'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

export default () => {
  return (
    <div>
      <Header />
      <Navigation option={'dashboard'} category={'Web App'} idea={'Facebook'}/>
      <div>
        <IdeaList />
      </div>
    </div>
  )
}
