export default (ideas, { sortBy, filterText }) => {
  return ideas
    .filter((idea) => {
      const textMatch = idea.name.toLowerCase().includes(filterText.toLowerCase())

      return textMatch
    })
      .sort((a, b) => {
        if (sortBy === 'title') {
          return a.name > b.name ? 1 : -1
        } else if (sortBy === 'lastEdited') {
          return a.lastEdited > b.lastEdited ? 1 : -1
        } else if (sortBy === 'lastCreated') {
          return a.createdAt > b.createdAt ? 1 : -1
        } else {
          return ''
        }
      })
}