import React, { Fragment } from 'react';

const FilterForm = ({ handleFilterChange, value }) => {
  return (
    <Fragment>
      <form>
        <input className="input" onChange={handleFilterChange} value={value} />
      </form>
    </Fragment>
  );
};

export default FilterForm;
