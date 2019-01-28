import React from 'react'
import { Link } from 'react-router-dom'

export default function IdeaItem({ id, category, name, handleDeleteIdea, changeToSummary }) {
  return (
    <div className="columns is-mobile">
      <div className="column">
        <Link 
          to={`/idea/${id}`} 
          onClick={() => {changeToSummary()}}
          className="box"
        >
          <p className="subtitle is-6">{category}</p>
          <h3 className="title is-5">{name}</h3>
        </Link>
      </div>
      <div className="column is-narrow">
        <button 
          onClick={() => {handleDeleteIdea({id})}}
          className="button is-danger"
        >x</button>
      </div>
    </div>
  )
}