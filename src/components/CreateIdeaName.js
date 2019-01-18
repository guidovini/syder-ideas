import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'

export default () => {
  return (
    <div>
      <Header />
      <h3>Insert the name of the idea</h3>
      <form>
        <input type="text"/>
        <Link to="/create-idea-description"><button>Continue</button></Link>
      </form>
      <Link to="/create-idea"><button>Back</button></Link>
    </div>
  )
}