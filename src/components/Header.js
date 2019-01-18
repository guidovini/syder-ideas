import React from 'react'

import { NavLink } from 'react-router-dom'

export default () => {
  return (
    <header>
      <h2>SyderIdeas</h2>
      <NavLink to="/create-idea">Create new idea </NavLink>
      <NavLink to="/dashboard">Dashboard </NavLink>
      <NavLink to="/profile">Profile </NavLink>
      <NavLink to="/help">Help </NavLink>
    </header>
  )
}