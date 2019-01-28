import React from 'react'
import { Link } from 'react-router-dom'

import Header from 'components/Header'

export default function Done() {
  return (
    <div>
      <Header />
      <div className="hero">
        <div className="hero-body">
          <div className="container">
            <h2 className="title">You are all set :)</h2>
            <div className="column">
              <figure className="image is-128x128">
                <img alt="" src="https://bulma.io/images/placeholders/128x128.png" />
              </figure>
            </div>
            <div className="column">
              <Link to="/dashboard"><button className="button is-success">Done</button></Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}