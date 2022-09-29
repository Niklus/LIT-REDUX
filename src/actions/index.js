// Actions
export default (store) => {
  const increment = () => {
    store.dispatch({ type: "counter/incremented" });
  };

  const decrement = () => {
    store.dispatch({ type: "counter/decremented" });
  };

  const getJoke = async () => {
    const randomJoke = await fetch("https://api.chucknorris.io/jokes/random");
    const result = await randomJoke.json();
    store.dispatch({ type: "joke/fetched", result });
  };

  return {
    increment,
    decrement,
    getJoke,
  };
};
