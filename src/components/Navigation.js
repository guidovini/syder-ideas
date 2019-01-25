import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ idea }) {
  return (
    <div className="container">
      <div className="columns">
        <div className="column">
          {idea 
            ? 
              <nav className="breadcrumb">
                <ul>
                  <li><Link to="/dashboard">Dashboard</Link> </li>
                  <li><Link to="/categories">{idea.category}</Link> </li>
                  <li><Link to={`/create/${idea.id}`}>{idea.name}</Link></li>
                </ul>
              </nav>
            : 
              <nav className="breadcrumb">
                <ul>
                  <li><Link to="/dashboard">Dashboard</Link> </li>
                </ul> 
              </nav> 
          }
        </div>
        <div className="column">
          <Link to="/create"><button className="button is-primary">Create new idea</button></Link>
        </div>
      </div>
    </div>
  )
}