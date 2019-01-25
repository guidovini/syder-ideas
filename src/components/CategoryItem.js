import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({ id, name, description}) {
  return (
    <div>
      <Link to={`/idea/${id}`} key={id}>
        <div className="box">
          <h4 className="subtitle is-7">{name}</h4>
          <p className="title is-6">{description}</p>
        </div>
      </Link>
    </div>
  )
}