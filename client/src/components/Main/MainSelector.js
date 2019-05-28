import React, { Component } from 'react';
import { connect } from 'react-redux';

import IdeaSummary from '../Menu/IdeaSummary';
import IdeaFeatures from '../IdeaComponents/Features/IdeaFeatures';
import IdeaStrategies from '../IdeaComponents/Strategies/IdeaStrategies';
import IdeaInspiration from '../IdeaComponents/Inspiration/IdeaInspiration';
import IdeaBusinessModel from '../IdeaComponents/BusinessModel/IdeaBusinessModel';
import IdeaPlanning from '../IdeaComponents/Planning/IdeaPlanning';
import IdeaResources from '../IdeaComponents/Resources/IdeaResources';

class MainSelector extends Component {
  onSelect = () => {
    const { option } = this.props.menu;
    const { idea } = this.props;
    switch (option) {
      case 'summary':
        return <IdeaSummary idea={idea} />;
      case 'features':
        return <IdeaFeatures idea={idea} />;
      case 'strategies':
        return <IdeaStrategies idea={idea} />;
      case 'inspiration':
        return <IdeaInspiration idea={idea} />;
      case 'business-model':
        return <IdeaBusinessModel idea={idea} />;
      case 'planning':
        return <IdeaPlanning idea={idea} />;
      case 'resources':
        return <IdeaResources idea={idea} />;
      default:
        return '';
    }
  };

  render() {
    return (
      <div>
        <h2 className="message-header">{this.props.title}</h2>
        {this.onSelect()}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  title: state.menu.title
  // idea: state.ideas.find(idea => idea.id === match.params.id)
});

export default connect(mapStateToProps)(MainSelector);
