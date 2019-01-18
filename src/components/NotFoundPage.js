import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <p>404. Not found page :(</p>
      <Link to="/">Go home</Link>
    </div>
  )
}