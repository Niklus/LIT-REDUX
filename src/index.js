// Lib imports
import { createStore } from "redux";
import { render } from "lit-html";

// App imports
import initialState from "./state";
import reducers from "./reducers";
import _actions from "./actions";
import template from "./templates";

// styles
import "./styles.css";

// Redux Setup
const store = createStore(reducers, initialState);
const actions = _actions(store);

const renderTemplate = () => {
  const state = store.getState();
  render(template(state, actions), document.body);
};

// Initialize
renderTemplate();

// Subscribe to state changes
store.subscribe(renderTemplate);

// Get Joke data
actions.getJoke();
