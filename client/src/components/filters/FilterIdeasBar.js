import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortForm from 'components/filters/SortForm'
import FilterForm from 'components/filters/FilterForm'
import { sortByLastUpdated, sortByLastCreated, sortAlphabetically, setFilterText } from 'actions/filters'

export class FilterIdeasBar extends Component {
  handleSortChange = (e) => {
    if (e.target.value === 'updated') {
      this.props.dispatch(sortByLastUpdated())
    } else if (e.target.value === 'created') {
      this.props.dispatch(sortByLastCreated())
    } else {
      this.props.dispatch(sortAlphabetically())
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
          <FilterForm handleFilterChange={this.handleFilterChange} value={this.props.value}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  value: state.filters.filterText
})

export default connect(mapStateToProps)(FilterIdeasBar)