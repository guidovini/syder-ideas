import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'

export default () => {
  return (
    <div>
      <Header />
      <h2>You are all set :)</h2>
      <p>THIS IS AN IMAGE</p>
      <Link to="/dashboard"><button>Done</button></Link>
    </div>
  )
}