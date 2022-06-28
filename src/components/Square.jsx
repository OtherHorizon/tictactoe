import React from 'react';
export default function Square({ number, onClick, isWinningSquare }) {
  return (
    <button
      type="button"
      className="square"
      onClick={onClick}
      style={{ fontWeight: isWinningSquare ? 'bold' : 'normal' }}
    >
      {number}
    </button>
  );
}
