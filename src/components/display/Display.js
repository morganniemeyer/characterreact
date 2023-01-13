import React from 'react';

export default function Display({ head }) {
  return (
    <div>
      <img src={`/images/heads/${head}.png`} />
    </div>
  );
}
