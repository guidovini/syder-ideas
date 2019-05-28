import React from 'react';

import StrategyForm from './StrategyForm';
import StrategiesList from './StrategiesList';

export default function IdeaFeatures({ idea }) {
  return (
    <div>
      <StrategyForm idea={idea} />
      <StrategiesList idea={idea} />
    </div>
  );
}
