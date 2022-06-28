import React from 'react';
export default function Square({ number, onClick, isWinningSquare }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`square ${isWinningSquare ? 'winning' : ' '}
      ${number === 'X' ? 'text-green' : 'text-orange'}`}
    >
      {number}
    </button>
  );
}
