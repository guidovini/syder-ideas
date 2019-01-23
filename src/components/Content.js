import React from 'react'
import { connect } from 'react-redux'

import Header from 'components/Header'
import Menu from 'components/Menu/Menu'
import Main from 'components/Main/Main'
import Options from 'components/Configuration/Configuration'
import Navigation from 'components/Navigation'

const Content = ({ idea, menu }) => {
  return (
    <div>
      <Header />
      <Navigation idea={idea}/>
      <Menu idea={idea} menu={menu}/>
      <Main idea={idea} menu={menu}/>
      <Options />
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  idea: state.ideas.find(idea => idea.id === props.match.params.id),
  menu: state.menu
})

export default connect(mapStateToProps)(Content)