const InitState = 1;

export default (state = InitState, action) => {
  switch (action.type){
    case 'INCREASE_COUNTER':
      if(state<99) return ++state;
      return state;
    case 'DECREASE_COUNTER':
      if(state>=1) return --state;
      return state;
    case 'RESET_COUNTER':
      return InitState;
    default:
      return state;
  }
};
