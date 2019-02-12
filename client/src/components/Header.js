import React from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item"><h1 className="title is-5">SyderIdeas</h1></Link>
          <p className="navbar-burger burger" aria-label="menu" aria-expanded="false" data-target="syderHeader">
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </p>
        </div>
        <div id="syderHeader" className="navbar-menu">
          <div className="navbar-start">
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
          </div>
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
          </div>
        </div>
      </nav>
    </header>
  )
}