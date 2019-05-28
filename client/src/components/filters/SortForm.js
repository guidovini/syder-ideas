import React, { Fragment } from 'react';

const SortForm = ({ handleSortChange, value }) => {
  return (
    <Fragment>
      <form className="select">
        <select onChange={handleSortChange} value={value}>
          <option value="alphabetically">Alphabetically</option>
          <option value="updated">Updated</option>
          <option value="created">Created</option>
        </select>
      </form>
    </Fragment>
  );
};

export default SortForm;
