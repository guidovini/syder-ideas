import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const IdeaSummary = ({ idea }) => {
  return (
    <div>
      <Link to={`/create/${idea.id}`}>
        <button>Edit</button>
      </Link>
      <div>
        <h4>Idea Category:</h4>  
        {idea.category}
      </div>   
      <div>
        <h4>Idea Name:</h4>  
        {idea.name}
      </div>  
      <div>
        <h4>Idea Description:</h4>  
        {idea.description}
      </div>
      <div>
        <h4>Who is this for?:</h4>  
        {idea.target}
      </div>    
    </div>
  )
}

export default connect()(IdeaSummary)
