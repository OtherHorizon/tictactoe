import React from 'react';
export default function Square({ number, onClick }) {
  return (
    <button type="button" className="square" onClick={onClick}>
      {number}
    </button>
  );
}
