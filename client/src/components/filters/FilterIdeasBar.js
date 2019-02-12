import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortForm from 'components/filters/SortForm'
import FilterForm from 'components/filters/FilterForm'
import { sortByLastEdited, sortByLastCreated, sortByTitle, setFilterText } from 'actions/filters'

export class FilterIdeasBar extends Component {
  handleSortChange = (e) => {
    if (e.target.value === 'lastEdited') {
      this.props.dispatch(sortByLastEdited())
    } else if (e.target.value === 'lastCreated') {
      this.props.dispatch(sortByLastCreated())
    } else {
      this.props.dispatch(sortByTitle())
    }
  }

  handleFilterChange = (e) => {
    this.props.dispatch(setFilterText(e.target.value))
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column">
          <SortForm handleSortChange={this.handleSortChange} />
        </div>
        <div className="column">
          <FilterForm handleFilterChange={this.handleFilterChange}/>
        </div>
      </div>
    )
  }
}

export default connect()(FilterIdeasBar)