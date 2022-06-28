import React from 'react';
import Square from './Square';

export default function Board() {
  return (
    <div className="board">
      <div className="board-row">
        <Square number={0} />
        <Square number={1} />
        <Square number={2} />
      </div>
      <div className="board-row">
        <Square number={3} />
        <Square number={4} />
        <Square number={5} />
      </div>
      <div className="board-row">
        <Square number={7} />
        <Square number={8} />
        <Square number={9} />
      </div>
    </div>
  );
}
