import React from 'react'
import { connect } from 'react-redux'

import Menu from 'components/Menu/Menu'
import Main from 'components/Main/Main'
import Options from 'components/Options/Options'
import Navigation from 'components/Navigation'

const Content = ({ idea, menu }) => {
  return (
    <div>
      <div className="section">
        <Navigation idea={idea}/>
        <div>
          <div className="columns">
            <div className="column is-one-quarter">
              <Menu idea={idea} menu={menu}/>
            </div>
            <div className="column">
              <Main idea={idea} menu={menu}/>
            </div>
            <div className="column is-one-quarter">
              <Options />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const mapStateToProps = (state, props) => ({
  idea: state.ideas.find(idea => idea.id === props.match.params.id),
  menu: state.menu
})

export default connect(mapStateToProps)(Content)