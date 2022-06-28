import React from 'react';
export default function Square({ number }) {
  return (
    <button type="button" className="square">
      {number}
    </button>
  );
}
