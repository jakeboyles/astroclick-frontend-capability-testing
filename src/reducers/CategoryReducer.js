const InitState = ["Category One", "Category Two", "Category Three"];

export default (state = InitState, action) => {
  switch (action.type){
  	case 'ADD_CATEGORY':
		return state.concat(action.category);
	case 'REMOVE_CATEGORY':
		// We will check on index in array, normally have an ID
		return state.filter((item,idx) => {
			if(idx!==action.index) return item;
		});
    default:
      return state;
  }
};
