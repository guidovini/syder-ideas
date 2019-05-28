import React from 'react';
import { Link } from 'react-router-dom';

const Welcome = () => {
  return (
    <div className="hero">
      <div className="hero-body">
        <div className="container is-centered box">
          <h1 className="title is-4">I want to...</h1>
          <div className="columns is-centered">
            <div className="column is-two-fifths">
              <Link to="/create">
                <button
                  // autoFocus
                  className="button is-link is-medium"
                  type="button"
                >
                  Create new idea
                </button>
              </Link>
            </div>
            <div className="column is-two-fifths">
              <Link to="/dashboard">
                <button className="button is-light is-medium" type="button">
                  Check my ideas
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Welcome;
