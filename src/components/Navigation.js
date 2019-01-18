import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <nav>
      <p>Dashboard > Business Ideas > App > Recipio</p>
      <Link to="/create-idea"><button>Create new idea</button></Link>
    </nav>
  )
}