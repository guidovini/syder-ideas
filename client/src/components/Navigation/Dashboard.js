import React from 'react';

import IdeasList from '../Ideas/IdeasList';
import FilterIdeasBar from '../filters/FilterIdeasBar';
import requireAuth from '../../middleware/requireAuth';

const Dashboard = () => {
  return (
    <div>
      <div className="section">
        <div className="columns is-centered">
          <div className="column is-three-fifths">
            <h2 className="title is-4">Dashboard</h2>
            <FilterIdeasBar />
            <IdeasList />
          </div>
        </div>
      </div>
    </div>
  );
};

export default requireAuth(Dashboard);
