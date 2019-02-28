import React, { Component } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { connect } from 'react-redux'
import jwtDecode from 'jwt-decode'

import HeaderAuth from 'components/HeaderAuth'
import HeaderNoAuth from 'components/HeaderNoAuth'

class Header extends Component {
  renderNavBarEnd() {
    let decode = ''
    try {
      decode = jwtDecode(this.props.auth)
    } catch (e) {
      console.log('INVALID TOKEN', e)
      localStorage.removeItem('token')
      decode = ''
    }

    if (decode) { 
      return <HeaderAuth /> 
    } else { 
      return <HeaderNoAuth /> 
    }
  }

  renderCreateNewIdeaButton() {
    let decode = ''
    try {
      decode = jwtDecode(this.props.auth)
    } catch (e) {
      console.log('INVALID TOKEN', e)
      localStorage.removeItem('token')
      decode = ''
    }

    if (decode) {
      return (
        <NavLink 
          to="/create" 
          activeClassName="navbar-item is-active" 
          className="navbar-item"
        >
          <p className="button is-link">
            <span className="icon is-small"><i className="fas fa-plus"></i></span>
            <span>Create new idea</span>
          </p>
        </NavLink>
      )
    } else {
      return ''
    }
  }

  render() {
    return (
      <header>
        <nav className="navbar has-shadow" role="navigation" aria-label="main navigation">

          <div className="navbar-brand">
            <Link to="/dashboard" className="navbar-item"><h1 className="title is-5">SyderIdeas</h1></Link>
            <p className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="syderHeader">
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
              <span aria-hidden="true"></span>
            </p>
          </div>

          <div id="syderHeader" className="navbar-menu">
            <div className="navbar-start">
              {this.renderCreateNewIdeaButton()}
            </div>

            <div className="navbar-menu">
              {this.renderNavBarEnd()}
            </div>  
  
          </div>

        </nav>
      </header>
    )
  }
}

const mapStateToProps = (state) => ({
  auth: state.auth.authenticated
})

export default connect(mapStateToProps)(Header)