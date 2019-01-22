import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation(props) {
  return (
    <div>
      {<p>
        <Link to="/">Dashboard</Link> 
        <span>></span> <Link to="/categories">{props.idea.category}</Link> 
        <span>></span> <Link to={`/create/${props.idea.id}`}>{props.idea.name}</Link>
      </p> 
      }
      <Link to="/create"><button>Create new idea</button></Link>
    </div>
  )
}