import { html } from "lit-html";

// This is the entry point of the view: You can split the views into
// different components and pages inside this template folder
// You can also use code splitting with dynamic imports incase of routing
export default (state, actions) => html`
  <main>
    <h2>${state.title}</h2>
    <h3>${state.counter}</h3>
    <button @click=${actions.increment}>Increment</button>
    <button @click=${actions.decrement}>Decrement</button>
    <p>${state.joke.value ?? "...loading joke"}</p>
    <button @click=${actions.getJoke}>Get New Joke</button>
  </main>
`;
