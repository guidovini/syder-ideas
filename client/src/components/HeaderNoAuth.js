import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className="navbar-end">

      <NavLink 
        to="/login"
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <div className="button is-primary is-inverted">
          <span className="icon"><i className="fas fa-sign-in-alt"></i></span>
          <span>Log In</span>
        </div>
      </NavLink>

      <NavLink 
        to="/signup"
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <div className="button is-link">
          <span className="icon"><i className="fas fa-user-plus"></i></span>
          <span>Sign Up</span>
        </div>
      </NavLink>
      
    </div>
  )
}