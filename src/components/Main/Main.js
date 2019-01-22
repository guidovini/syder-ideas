import React from 'react'

import MainSelector from 'components/Main/MainSelector';

const Main = ({ idea, menu }) => {
  return (
    <div>
      <h3>Main</h3>
      <MainSelector idea={idea} menu={menu}/>
    </div>
  )
}

export default Main