import React, { Fragment } from 'react'

const FilterForm = ({ handleFilterChange }) => {
  return (
    <Fragment>
      <form>
        <input 
          className="input" 
          onChange={handleFilterChange} 
        />
      </form>
    </Fragment>
  )
}

export default FilterForm