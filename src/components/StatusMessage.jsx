import React from 'react';

const StatusMessage = ({ winner, current }) => {
  const noMove = current.board.every(elem => elem !== null);

  return (
    <div className="status-message">
      {winner && (
        <>
          Winner is{' '}
          <span className={winner === 'X' ? 'text-green' : 'text-orange'}>
            {winner}
          </span>
        </>
      )}
      {!winner && !noMove && (
        <>
          Next player is{' '}
          <span className={current.isNext ? 'text-green' : 'text-orange'}>
            {current.isNext ? 'X' : '0'}{' '}
          </span>
        </>
      )}
      {!winner && noMove && (
        <>
          <span className="text-green">X</span> and{' '}
          <span className="text-orange">0</span>
        </>
      )}
    </div>
  );
};
export default StatusMessage;
