import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMove = current.board.every(elem => elem !== null);
  return (
    <h2>
      {winner && `Winner is ${winner}`}
      {!winner && !noMove && `Next player is ${current.isXNext ? 'X' : '0'}`}
      {!winner && noMove && 'Both players are tied'}
    </h2>
  );
};
export default StatusMessage;
