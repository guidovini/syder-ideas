import React from 'react'

import InspirationForm from './InspirationForm'
import StrategiesList from './InspirationList'

export default function IdeaFeatures({ idea }) {
  return (
    <div>
      <InspirationForm idea={idea}/>
      <StrategiesList idea={idea}/>
    </div>
  )
}