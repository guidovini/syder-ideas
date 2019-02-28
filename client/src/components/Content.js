import React, { Component } from 'react'
import { connect } from 'react-redux'

import Menu from 'components/Menu/Menu'
import Main from 'components/Main/Main'
import Options from 'components/Options/Options'
import Navigation from 'components/Navigation'
import { startSetIdeas } from 'actions/ideas'

class Content extends Component {
  componentDidMount() {
    this.props.dispatch(startSetIdeas())
  }

  render() {
    const { idea, menu } = this.props
    return (
      <div>
        <div className="section">
          <Navigation idea={idea}/>
          <div>
            <div className="columns">
              <div className="column is-one-quarter">
                <Menu />
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
}

const mapStateToProps = (state, props) => ({
  idea: state.ideas.some(idea => idea.id === props.match.params.id) ? state.ideas.find(idea => idea.id === props.match.params.id) : state.ideas[0],
  menu: state.menu
})

export default connect(mapStateToProps)(Content)