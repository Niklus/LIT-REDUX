// Reducer
export default (state, action) => {
  switch (action.type) {
    case "counter/incremented":
      return { ...state, counter: state.counter + 1 };
    case "counter/decremented": {
      if (state.counter === 0) {
        return state;
      }
      return decrement(state);
    }
    case "joke/fetched":
      return { ...state, joke: action.result };
    default:
      return state;
  }
};

// Can be placed in  anther file: good for slitting reducers
function decrement(state) {
  return { ...state, counter: state.counter - 1 };
}
