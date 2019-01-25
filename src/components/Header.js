import React from 'react'

import { Link, NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header>
      <nav className="navbar has-shadow">
        <div className="navbar-brand">
          <Link to="/" className="navbar-item"><h1 className="title is-5">SyderIdeas</h1></Link>
        </div>
        <div className="navbar-menu">
          <div className="navbar-start">
            <NavLink 
              to="/create" 
              activeClassName="navbar-item is-active" 
              className="navbar-item"
            >
              Create new idea
            </NavLink>
          </div>
          <div className="navbar-end">
            <NavLink 
              to="/dashboard" 
              activeClassName="navbar-item is-active" 
              className="navbar-item"
            >
              Dashboard
            </NavLink>
            <NavLink 
              to="/categories" 
              activeClassName="navbar-item is-active" 
              className="navbar-item"
            >
              Categories
            </NavLink>
            <NavLink 
              to="/help" 
              activeClassName="navbar-item is-active" 
              className="navbar-item"
            >
              Help
            </NavLink>
            <NavLink 
              to="/profile" 
              activeClassName="navbar-item is-active" 
              className="navbar-item"
            >
              Profile
            </NavLink>
          </div>
        </div>
      </nav>
    </header>
  )
}