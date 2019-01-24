import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ idea }) {
  return (
    <div>
      {idea 
        ? 
        <p>
          <Link to="/dashboard">Dashboard</Link> 
          <span>></span> 
          <Link to="/categories">{idea.category}</Link> 
          <span>></span> 
          <Link to={`/create/${idea.id}`}>{idea.name}</Link>
        </p>
        : 
          <p>
            <Link to="/dashboard">Dashboard</Link> 
          </p> 
      }
      <Link to="/create"><button>Create new idea</button></Link>
    </div>
  )
}