import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const IdeaSummary = ({ idea }) => {
  return (
    <div>
      <div className="column">
        <h3 className="title is-6">Idea Category:</h3>  
        {idea.category}
      </div>   
      <div className="column">
        <h3 className="title is-6">Idea Name:</h3>  
        {idea.name}
      </div>  
      <div className="column">
        <h3 className="title is-6">Idea Description:</h3>  
        {idea.description}
      </div>
      <div className="column">
        <h3 className="title is-6">Who is this for?:</h3>  
        {idea.target}
      </div>    
      <div className="column is-2 is-offset-10">
        <Link to={`/create/${idea.id}`} className="button is-primary">Edit</Link>
      </div>
    </div>
  )
}

export default connect()(IdeaSummary)
