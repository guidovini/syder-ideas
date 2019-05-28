import React, { Component } from 'react'
import { connect } from 'react-redux'

import InspirationEdit from './InspirationEdit' 
import { startDeleteInspiration }  from 'actions/inspiration'

export class InspirationItem extends Component {
  onInspirationDelete = () => {
    this.props.dispatch(startDeleteInspiration(this.props.Inspiration))
  }

  render() {
    return (
      <div className="column">
        <div className="columns is-mobile">
          <div className="column">
            <InspirationEdit text={this.props.Inspiration.text} idea={this.props.idea} Inspiration={this.props.Inspiration} />
          </div>
          <div className="column is-narrow">
            <button onClick={this.onInspirationDelete} className="delete">x</button>
          </div>        
        </div>
      </div>
    )
  }
}

export default connect()(InspirationItem)