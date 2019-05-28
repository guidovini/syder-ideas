import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startSetFeatures } from '../../../actions/features';
import FeatureItem from './FeatureItem';

class FeaturesList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetFeatures());
  }

  render() {
    return (
      <div>
        {this.props.features.map(feature => {
          if (this.props.idea.id === feature.ideaId) {
            return (
              <FeatureItem
                key={feature.id}
                idea={this.props.idea}
                feature={feature}
              />
            );
          }
          return '';
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  features: state.features
});

export default connect(mapStateToProps)(FeaturesList);
