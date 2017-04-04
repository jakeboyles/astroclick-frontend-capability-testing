module.exports = {
  addCategory: (category) => {
    return {
      type: 'ADD_CATEGORY',
      ...category
    };
  },
  removeCategory: (index) => {
    return {
      type: 'REMOVE_CATEGORY',
      ...index
    };
  }
};
