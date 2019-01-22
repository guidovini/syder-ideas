import React from 'react'
import { Link } from 'react-router-dom'

export default ({ id, category, name }) => {
  return (
    <Link to={`/idea/${id}`} >
      <div>
        <p>{category}</p>
        <h3>{name}</h3>
      </div>
    </Link>
  )
}
