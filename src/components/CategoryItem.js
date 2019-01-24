import React from 'react'
import { Link } from 'react-router-dom'

export default function CategoryItem({ id, name, description}) {
  return (
    <div>
      <Link to={`/idea/${id}`} key={id}>
        <h4>{name}</h4>
        <p>{description}</p>
      </Link>
    </div>
  )
}