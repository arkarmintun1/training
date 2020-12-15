import React, { Component } from 'react';

const ScoreboardContext = React.createContext();

class Provider extends Component {
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

  render() {
    return (
      <ScoreboardContext.Provider
        value={{
          players: this.state.players,
          actions: {
            changeScore: this.handleScoreChange,
            removePlayer: this.handleRemovePlayer,
            addPlayer: this.handleAddPlayer,
          },
        }}
      >
        {this.props.children}
      </ScoreboardContext.Provider>
    );
  }
}
const Consumer = ScoreboardContext.Consumer;

export { Provider, Consumer };
