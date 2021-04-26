import React, { Component } from "react";
import "./App.css";

import { CardList } from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    super();

    this.state = {
      monsters: [],
    };
  }

  async componentDidMount() {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const users = await response.json();
    this.setState({ monsters: users });
  }

  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.monsters}>
          {this.state.monsters.map((monster) => (
            <h1 key={monster.id}>{monster.name}</h1>
          ))}
        </CardList>
      </div>
    );
  }
}

export default App;
