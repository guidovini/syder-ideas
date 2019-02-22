import React, { Fragment } from 'react'

const SortForm = ({ handleSortChange}) => {
  return (
    <Fragment>
      <form className="select">
        <select onChange={handleSortChange}>
          <option value='alphabetically'>Alphabetically</option>
          <option value='updated'>Updated</option>
          <option value='created'>Created</option>
        </select>
      </form>
    </Fragment>
  )
}

export default SortForm