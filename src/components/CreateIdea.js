import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Link to="/">Go home</Link>
      <h2>Let's begin!!</h2>
      <form>
        <input type="text"/>
        <button>CONTINUE</button>
      </form>
    </div>
  )
}