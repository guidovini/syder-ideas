import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container is-centered">
          <h1 className="title">Welcome to Syder Ideas</h1>
          <h2 className="subtitle">I want to...</h2>
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <Link to="/create"><button autoFocus className="button is-link">Create new idea</button></Link>
            </div>
            <div className="column is-two-fifths">
              <Link to="/dashboard"><button className="button is-link">Check my ideas</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}