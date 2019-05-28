export default (ideas, { sortBy, filterText, filterVisibility }) => {
  return ideas
    .filter(idea => {
      if (!idea.name) return idea;
      const textMatch = idea.name
        .toLowerCase()
        .includes(filterText.toLowerCase());

      return textMatch;
    })
    .filter(idea => {
      if (filterVisibility === 'favorite') return idea.favorite === true;
      if (filterVisibility === 'archive') return idea.archive === true;
      return idea;
    })

    .sort((a, b) => {
      if (sortBy === 'alphabetically') {
        return a.name > b.name ? 1 : -1;
      }
      if (sortBy === 'updated') {
        return a.lastEdited < b.lastEdited ? 1 : -1;
      }
      if (sortBy === 'created') {
        return a.createdAt < b.createdAt ? 1 : -1;
      }
      return '';
    })
    .sort((a, b) => {
      if (a.favorite > b.favorite) return -1;
      return 1;
    });
};
