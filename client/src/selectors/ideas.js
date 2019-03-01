export default (ideas, { sortBy, filterText }) => {
  return ideas
    .filter((idea) => {
      const textMatch = idea.name.toLowerCase().includes(filterText.toLowerCase())

      return textMatch
    })
      .sort((a, b) => {
        if (sortBy === 'alphabetically') {
          return a.name > b.name ? 1 : -1
        } else if (sortBy === 'updated') {
          return a.lastEdited < b.lastEdited ? 1 : -1
        } else if (sortBy === 'created') {
          return a.createdAt < b.createdAt ? 1 : -1
        } else {
          return ''
        }
      })
        .sort((a, b) => {
          if (a.favorite > b.favorite) return -1
          else return 1
        })
}