import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <h3>Insert the name of the idea</h3>
      <form>
        <input type="text"/>
        <Link to="/create-idea-description"><button>Continue</button></Link>
      </form>
      <Link to="/create-idea"><button>Back</button></Link>
    </div>
  )
}