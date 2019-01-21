import React from 'react'

export default (props) => {
  return (
    <label>
      <p>{props.category}</p>
      <h3>{props.name}</h3>
    </label>
  )
}
