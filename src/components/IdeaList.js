import React from 'react'
import { connect } from 'react-redux'

import IdeaItem from 'components/IdeaItem'

const IdeaList = (props) => {
  return (
    <div>
      {props.ideas.map((idea) => {
        return <IdeaItem key={idea.id} {...idea}/>
      })}
    </div>
  )
}

const mapStateToProps = (state) => ({
  ideas: state.ideas
})

export default connect(mapStateToProps)(IdeaList)