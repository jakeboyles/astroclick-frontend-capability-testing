module.exports = {
  counterDown: (string) => {
    return {
      type: 'DECREASE_COUNTER'
    };
  },
  counterUp: (index) => {
    return {
      type: 'INCREASE_COUNTER'
    };
  },
  counterReset: () => {
    return {
      type: 'RESET_COUNTER'
    };
  },
};
