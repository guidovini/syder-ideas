import React from 'react'
import { Link } from 'react-router-dom'

import Menu from 'components/Menu'
import Main from 'components/Main'
import Options from 'components/Options'

export default () => {
  return (
    <div>
      <h2>Welcome to Syder Ideas</h2>
      <h3>I want to</h3>
      <div>
        Image
        <Link to="/create-idea"><button>Create new idea</button></Link>
      </div>
      <div>
        Image
        <Link to="/dashboard"><button>Check my ideas</button></Link>
      </div>
    </div>
  )
}