import React, { Component } from "react";
import Header from "./Header";

class Jokes extends Component {
  state = { joke: {}, jokes: [] };

  componentDidMount() {
    fetch("https://official-joke-api.appspot.com/random_joke")
      .then((response) => response.json())
      .then((json) => this.setState({ joke: json }))
      .catch((error) => alert(error.message));
  }
  fetchJokes = () => {
    fetch("https://official-joke-api.appspot.com/random_ten").then((response) =>
      response.json().then((json) => this.setState({ jokes: json }))
    );
  };

  render() {
    const { setup, punchline } = this.state.joke;

    return (
      <div>
        <Header />
        <h2>Highlighted Joke</h2>
        <p>
          {setup} <em>{punchline}</em>
          <hr />
          <h3>Want ten new jokes?</h3>
          <button onClick={this.fetchJokes}>Click me!</button>
          {this.state.jokes.map((joke) => {
            const { id, setup, punchline } = joke;
            return (
              <p key={id}>
                {setup}
                <em>{punchline}</em>
              </p>
            );
          })}
        </p>
      </div>
    );
  }
}

export default Jokes;
