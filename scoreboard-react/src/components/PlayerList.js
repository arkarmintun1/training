import React from 'react';

import { Consumer } from './context';

import Player from './Player';

const PlayerList = () => {
  return (
    <Consumer>
      {({ players }) => {
        const checkIsPlayerHighScore = (currentPlayer) => {
          if (currentPlayer.score === 0) return false;
          const highestplyaers = players.filter(
            (player) => player.score > currentPlayer.score
          );
          return highestplyaers.length === 0;
        };

        return players.map((player, index) => (
          <Player
            index={index}
            key={player.id.toString()}
            isHighestScore={checkIsPlayerHighScore(player)}
          />
        ));
      }}
    </Consumer>
  );
};

export default PlayerList;
