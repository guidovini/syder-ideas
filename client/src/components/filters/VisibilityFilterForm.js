import React, { Fragment } from 'react'

const VisibilityFilterForm = ({ handleVisibilityChange, value }) => {
  return (
    <Fragment>
      <form className="select">
        <select onChange={handleVisibilityChange} value={value}>
          <option value='all'>See all ideas</option>
          <option value='favorite'>See favorited ideas</option>
          <option value='archive'>See archived ideas</option>
        </select>
      </form>
    </Fragment>
  )
}

export default VisibilityFilterForm