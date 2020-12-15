import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';

class App extends Component {
  state = {
    players: [
      {
        name: 'Guil',
        score: 50,
        id: 1,
      },
      {
        name: 'Treasure',
        score: 85,
        id: 2,
      },
      {
        name: 'Ashley',
        score: 95,
        id: 3,
      },
      {
        name: 'James',
        score: 80,
        id: 4,
      },
    ],
  };

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((player) => player.id !== id),
    }));
  };

  render() {
    return (
      <div className="scoreboard">
        <Header title="Scoreboard" totalPlayers={this.state.players.length} />

        {/* Player List */}
        {this.state.players.map((player) => (
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            removePlayer={this.handleRemovePlayer}
          />
        ))}
      </div>
    );
  }
}

export default App;
