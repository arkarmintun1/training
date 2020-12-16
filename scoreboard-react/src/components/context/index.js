import React, { useState } from 'react';

const ScoreboardContext = React.createContext();

let id = 0;

const Provider = (props) => {
  const [players, setPlayers] = useState([]);

  const handleScoreChange = (index, delta) => {
    setPlayers((prevState) => {
      const updatedPlayers = [...prevState];
      const updatedPlayer = { ...updatedPlayers[index] };

      updatedPlayer.score += delta;
      updatedPlayers[index] = updatedPlayer;

      return updatedPlayers;
    });
  };

  const handleAddPlayer = (name) => {
    setPlayers((prevState) => {
      return [
        ...prevState,
        {
          name,
          score: 0,
          id: (id += 1),
        },
      ];
    });
  };

  const handleRemovePlayer = (id) => {
    setPlayers((prevState) => prevState.filter((player) => player.id !== id));
  };

  return (
    <ScoreboardContext.Provider
      value={{
        players,
        actions: {
          changeScore: handleScoreChange,
          removePlayer: handleRemovePlayer,
          addPlayer: handleAddPlayer,
        },
      }}
    >
      {props.children}
    </ScoreboardContext.Provider>
  );
};

export { ScoreboardContext, Provider };
