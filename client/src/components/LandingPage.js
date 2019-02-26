import React from 'react'
import { Link } from 'react-router-dom'

export default function LandingPage() {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container is-centered">
          <h1 className="title">Welcome to Syder Ideas</h1>
          <h2 className="subtitle">The best place to store projects and ideas!</h2>
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <Link to="/signup"><button autoFocus className="button is-link is-medium">Signup</button></Link>
            </div>
            <div className="column is-two-fifths">
              <Link to="/login"><button className="button is-light is-medium">Login</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}