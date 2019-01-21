import React from 'react'
import { Link } from 'react-router-dom'

export default (props) => {
  return (
    <nav>
      {props.option == 'dashboard' ? <p>Dashboard</p> 
      : props.option == 'category' ? <p>Dashboard > {props.category}</p> 
        : <p>Dashboard > {props.category} > {props.idea}</p>}
      <Link to="/add-idea"><button>Create new idea</button></Link>
    </nav>
  )
}