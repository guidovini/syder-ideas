import React, { Component } from 'react'
import { connect } from 'react-redux'

import SortForm from 'components/filters/SortForm'
import FilterForm from 'components/filters/FilterForm'
import VisibilityFilterForm from 'components/filters/VisibilityFilterForm'
import { 
  sortByLastUpdated, 
  sortByLastCreated, 
  sortAlphabetically,
  resetVisibilityFilter,
  filterFavorited,
  filterArchived, 
  setFilterText } from 'actions/filters'

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

  handleVisibilityChange = (e) => {
    if (e.target.value === 'favorite') this.props.dispatch(filterFavorited())
    else if (e.target.value === 'archive') this.props.dispatch(filterArchived())
    else this.props.dispatch(resetVisibilityFilter())
  }

  render() {
    return (
      <div className="columns is-mobile">
        <div className="column is-narrow">
          <SortForm 
            handleSortChange={this.handleSortChange}
            value={this.props.sortValue} />
        </div>
        <div className="column is-narrow">
          <VisibilityFilterForm 
            handleVisibilityChange={this.handleVisibilityChange}
            value={this.props.visibilityValue}  
          />
        </div>
        <div className="column">
          <FilterForm 
            handleFilterChange={this.handleFilterChange} 
            value={this.props.value}/>
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  sortValue: state.filters.sortBy,
  visibilityValue: state.filters.filterVisibility,
  value: state.filters.filterText
})

export default connect(mapStateToProps)(FilterIdeasBar)