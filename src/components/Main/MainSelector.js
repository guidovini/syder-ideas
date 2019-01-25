import React, { Component } from 'react'
import { connect } from 'react-redux'

import IdeaSummary from 'components/Menu/IdeaSummary'
import IdeaFeatures from 'components/Menu/IdeaFeatures'
import IdeaStrategies from 'components/Menu/IdeaStrategies'
import IdeaInspiration from 'components/Menu/IdeaInspiration'
import IdeaBusinessModel from 'components/Menu/IdeaBusinessModel'
import IdeaPlanning from 'components/Menu/IdeaPlanning'
import IdeaResources from 'components/Menu/IdeaResources'

export class MainSelector extends Component {
  onSelect = () => {
    const option = this.props.menu.option
    const idea = this.props.idea
    switch (option) {
      case ('summary'):
        return <IdeaSummary idea={idea} />
      case ('features'):
        return <IdeaFeatures idea={idea} />
      case ('strategies'):
        return <IdeaStrategies idea={idea} />
      case ('inspiration'):
        return <IdeaInspiration idea={idea} />
      case ('business-model'):
        return <IdeaBusinessModel idea={idea} />
      case ('planning'):
        return <IdeaPlanning idea={idea} />
      case ('resources'):
        return <IdeaResources idea={idea} />
      default:
        return ''
    }
  }

  render() {
    return (
      <div>
        <h2 className="message-header">{this.props.title}</h2>
        {this.onSelect()}
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  title: state.menu.title,
  // idea: state.ideas.find(idea => idea.id === match.params.id)
})

export default connect(mapStateToProps)(MainSelector)
