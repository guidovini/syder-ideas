import React from 'react';

import requireAuth from '../../middleware/requireAuth';

const Help = () => {
  return (
    <div className="section">
      <div className="columns is-centered">
        <div className="column is-three-fifths">
          <h1 className="title is-4">Help</h1>
          <p>This is the help section</p>
        </div>
      </div>
    </div>
  );
};

export default requireAuth(Help);
