import React from 'react'

import Menu from 'components/Menu'
import Main from 'components/Main'
import Options from 'components/Options'
import Header from 'components/Header'
import Navigation from 'components/Navigation'

export default () => {
  return (
    <div>
      <Header />
      <Navigation />
      <div>
        <Menu />
        <Main />
        <Options />
      </div>
    </div>
  )
}