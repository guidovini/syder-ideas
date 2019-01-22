import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h3>Welcome to Syder Ideas</h3>
      <h4>I want to...</h4>
      <div>
        <Link to="/create"><button autoFocus>Create new idea</button></Link>
      </div>
      <div>
        <Link to="/dashboard"><button>Check my ideas</button></Link>
      </div>
    </div>
  )
}