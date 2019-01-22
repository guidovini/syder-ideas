import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const IdeaSummary = ({ idea }) => {
  return (
    <div>
      <h2>Summary</h2>
      <Link to={`/create/${idea.id}`}>
        <button>Edit</button>
      </Link>
      <div>
        <h3>Idea Category:</h3>  
        {idea.category}
      </div>   
      <div>
        <h3>Idea Name:</h3>  
        {idea.name}
      </div>  
      <div>
        <h3>Idea Description:</h3>  
        {idea.description}
      </div>
      <div>
        <h3>Who is this for?:</h3>  
        {idea.target}
      </div>    
    </div>
  )
}

export default connect()(IdeaSummary)
