import React, { Component } from 'react'
import { connect } from 'react-redux'

export class FeatureEdit extends Component {
  onEdit = () => {

  }

  render() {
    return (
      <div>
        This is a Component
      </div>
    )
  }
}

const mapStateToProps = (state, props) => {

}

export default connect(mapStateToProps)(FeatureEdit)



