import React from 'react'
import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <div className="navbar-end">
      <NavLink 
        to="/dashboard" 
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <span className="icon">
          <i className="fas fa-home"></i>
        </span>  
        <span>Dashboard</span>
      </NavLink>

      <NavLink 
        to="/categories" 
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <span className="icon"><i className="fas fa-book"></i></span>
        <span>Categories</span>
      </NavLink>

      <NavLink 
        to="/help" 
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <span className="icon"><i className="far fa-question-circle"></i></span>
        <span>Help</span>
      </NavLink>

      <NavLink 
        to="/profile" 
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <span className="icon"><i className="fas fa-user"></i></span>
        <span>Profile</span>
      </NavLink>

      <NavLink 
        to="/logout"
        activeClassName="navbar-item is-active" 
        className="navbar-item"
      >
        <div className="button is-danger is-outlined">
          <span className="icon"><i className="fas fa-sign-out-alt"></i></span>
          <span>Log Out</span>
        </div>
      </NavLink>
    </div>
  )
}