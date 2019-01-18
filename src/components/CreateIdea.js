import React from 'react'
import { Link } from 'react-router-dom'

export default () => {
  return (
    <div>
      <Link to="/">Go home</Link>
      <h2>Let's begin!!</h2>
      <h3>What do you want to create?</h3>
      <select>
        <option name='web-app'>Web app</option>
        <option name='mobile-app'>Mobile app</option>
        <option name='book'>Book</option>
        <option name='business'>Business</option>
      </select>
      <Link to="/create-idea-name"><button>Continue</button></Link>
    </div>
  )
}