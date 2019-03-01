import React from 'react'
import { Link } from 'react-router-dom'

export default function IdeaItem (
  { 
    id, 
    category, 
    name,
    favorite, 
    archive,
    handleDeleteIdea, 
    handleFavoriteIdea,
    handleArchiveIdea, 
    changeToSummary 
  }) {

  const favoriteCondition = {
    true: 'button is-warning',
    false: 'button'
  }  

  const archiveCondition = {
    true: 'button is-success',
    false: 'button'
  }

  return (
    <div className="columns is-mobile is-vcentered">
      <div className="column">
        <Link 
          to={`/idea/${id}`} 
          onClick={() => {changeToSummary()}}
          className="box"
        >
          <div>
            <p className="subtitle is-6">{category}</p>
            <h3 className="title is-5">{name}</h3>
          </div>
        </Link>
      </div>

      <div className="column is-narrow is-marginless is-paddingless">
        <button 
          onClick={() => {handleFavoriteIdea({ id })}}
          className={favoriteCondition[favorite]}
        >
          <span className="icon"><i className="far fa-star"></i></span>
        </button>

        <button 
          onClick={() => {handleArchiveIdea({ id })}}
          className={archiveCondition[archive]}
        >
          <span className="icon"><i className="fas fa-check"></i></span>
        </button>

        <button 
          onClick={() => {handleDeleteIdea({ id })}}
          className="button is-danger"
        >
          <span className="icon"><i className="far fa-trash-alt"></i></span>
        </button>
      </div>
    </div>
  )
}