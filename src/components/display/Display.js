import React from 'react';

export default function Display({ head, torso }) {
  return (
    <div>
      <img src={`/images/heads/${head}.png`} />
      <img src={`/images/shirts/${torso}.png`} />
    </div>
  );
}
