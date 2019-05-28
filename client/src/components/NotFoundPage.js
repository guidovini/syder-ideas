import React from 'react';
import { Link } from 'react-router-dom';

export default function NotFoundPage() {
  return (
    <div className="hero is-warning is-medium is-bold">
      <div className="hero-body">
        <h2 className="title is-4">404. Not found page :(</h2>
        <Link to="/dashboard" className="button is-dark is-outlined">
          Go home
        </Link>
      </div>
    </div>
  );
}
