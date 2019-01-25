import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const IdeaSummary = ({ idea }) => {
  return (
    <div>
      <Link to={`/create/${idea.id}`}>
        <button className="button is-text">Edit</button>
      </Link>
      <div>
        <h3 className="title is-6">Idea Category:</h3>  
        {idea.category}
      </div>   
      <div>
        <h3 className="title is-6">Idea Name:</h3>  
        {idea.name}
      </div>  
      <div>
        <h3 className="title is-6">Idea Description:</h3>  
        {idea.description}
      </div>
      <div>
        <h3 className="title is-6">Who is this for?:</h3>  
        {idea.target}
      </div>    
    </div>
  )
}

export default connect()(IdeaSummary)
