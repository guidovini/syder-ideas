import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'

export default () => {
  return (
    <div>
      <Header />
      <div>
        <h3>Insert a short description of your idea</h3>
        <textarea />
      </div>
      <div>
        <h3>Who is this app for?</h3>
        <input type="text" />
      </div>
      <div>
        <Link to="/create-idea-name"><button>Back</button></Link>
        <Link to="/create-idea-done"><button>Continue</button></Link>
      </div>
    </div>
  )
}