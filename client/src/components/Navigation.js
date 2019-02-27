import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation({ idea }) {
  return (
    <div className="">
      <div className="columns">
        <div className="column">
          {idea 
            ? 
              <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/dashboard">Dashboard</Link> </li>
                  <li><Link to="/categories">{idea.category}</Link> </li>
                  <li><Link to={`/create/${idea.id}`} className="has-text-weight-bold">{idea.name}</Link></li>
                </ul>
              </nav>
            : 
              <nav class="breadcrumb" aria-label="breadcrumbs">
                <ul>
                  <li><Link to="/dashboard">Dashboard</Link> </li>
                </ul> 
              </nav> 
          }
        </div>
      </div>
    </div>
  )
}