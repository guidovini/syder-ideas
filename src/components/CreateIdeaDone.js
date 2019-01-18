import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h2>You are all set :)</h2>
      <p>Image</p>
      <Link to="/dashboard"><button>Done</button></Link>
    </div>
  )
}