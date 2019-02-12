import React, { Fragment } from 'react'

const SortForm = ({ handleSortChange}) => {
  return (
    <Fragment>
      <form className="select">
        <select onChange={handleSortChange}>
          <option value='title'>Title</option>
          <option value='lastEdited'>Last Edited</option>
          <option value='lastCreated'>Last Created</option>
        </select>
      </form>
    </Fragment>
  )
}

export default SortForm