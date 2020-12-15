import React, { Component } from 'react';

import Header from './Header';
import Player from './Player';
import AddPlayerForm from './AddPlayerForm';

class App extends Component {
  state = {
    players: [
      {
        name: 'Guil',
        score: 0,
        id: 1,
      },
      {
        name: 'Treasure',
        score: 0,
        id: 2,
      },
      {
        name: 'Ashley',
        score: 0,
        id: 3,
      },
      {
        name: 'James',
        score: 0,
        id: 4,
      },
    ],
  };

  prevPlayerId = 4;

  handleRemovePlayer = (id) => {
    this.setState((prevState) => ({
      players: prevState.players.filter((player) => player.id !== id),
    }));
  };

  handleScoreChange = (index, delta) => {
    this.setState((prevState) => ({
      score: (prevState.players[index].score += delta),
    }));
  };

  handleAddPlayer = (name) => {
    this.setState((prevState) => ({
      players: [
        ...prevState.players,
        {
          name,
          score: 0,
          id: (this.prevPlayerId += 1),
        },
      ],
    }));
  };

  checkIsPlayerHighScore = (currentPlayer) => {
    if (currentPlayer.score === 0) return false;
    const highestplyaers = this.state.players.filter(
      (player) => player.score > currentPlayer.score
    );
    return highestplyaers.length === 0;
  };

  render() {
    return (
      <div className="scoreboard">
        <Header players={this.state.players} />

        {/* Player List */}
        {this.state.players.map((player, index) => (
          <Player
            key={player.id.toString()}
            id={player.id}
            name={player.name}
            score={player.score}
            index={index}
            isHighestScore={this.checkIsPlayerHighScore(player)}
            removePlayer={this.handleRemovePlayer}
            changeScore={this.handleScoreChange}
          />
        ))}
        <AddPlayerForm addPlayer={this.handleAddPlayer} />
      </div>
    );
  }
}

export default App;
