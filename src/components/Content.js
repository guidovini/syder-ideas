import React from 'react'
import { Link } from 'react-router-dom'

import Menu from 'components/Menu'
import Main from 'components/Main'
import Options from 'components/Options'

export default () => {
  return (
    <div>
      <h3>Welcome to Syder Ideas</h3>
      <h4>I want to</h4>
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