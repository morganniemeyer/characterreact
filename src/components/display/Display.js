import React from 'react';

export default function Display({ head, torso, bottoms }) {
  return (
    <div>
      <img src={`/images/heads/${head}.png`} />
      <img src={`/images/shirts/${torso}.png`} />
      <img src={`/images/bottoms/${bottoms}.png`} />
    </div>
  );
}
