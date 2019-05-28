import React from 'react';
import { Link } from 'react-router-dom';

export default function CategoryItem({ id, name, description }) {
  return (
    <div className="column" key={id}>
      <Link to={`/idea/${id}`} className="box">
        <h4 className="title is-6">{name}</h4>
        <p className="subtitle is-6">{description}</p>
      </Link>
    </div>
  );
}
