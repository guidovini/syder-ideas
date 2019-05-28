import React, { Component } from 'react';
import { connect } from 'react-redux';

import { startSetInspiration } from '../../../actions/inspiration';
import InspirationItem from './InspirationItem';

class InspirationList extends Component {
  componentDidMount() {
    this.props.dispatch(startSetInspiration());
  }

  render() {
    return (
      <div>
        {this.props.inspiration.map(Inspiration => {
          if (this.props.idea.id === Inspiration.ideaId) {
            return (
              <InspirationItem
                key={Inspiration.id}
                idea={this.props.idea}
                Inspiration={Inspiration}
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
  inspiration: state.inspiration
});

export default connect(mapStateToProps)(InspirationList);
