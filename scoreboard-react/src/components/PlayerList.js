import React, { useContext } from 'react';

import { ScoreboardContext } from './context';

import Player from './Player';

const PlayerList = () => {
  const { players } = useContext(ScoreboardContext);

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
};

export default PlayerList;
