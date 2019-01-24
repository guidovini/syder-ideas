import React from 'react'
import { Link } from 'react-router-dom'

export default function IdeaItem({ id, category, name, handleDeleteIdea, changeToSummary }) {
  return (
    <div>
      <Link to={`/idea/${id}`} onClick={() => {changeToSummary()}}>
        <p>{category}</p>
        <h3>{name}</h3>
      </Link>
      <button onClick={() => {handleDeleteIdea({id})}}>x</button>
    </div>
  )
}
