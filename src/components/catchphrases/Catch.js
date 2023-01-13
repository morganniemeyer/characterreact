import React from 'react';

export default function Catch({ headCount, torsoCount }) {
  return (
    <div>
      <p>
        {' '}
        You have changed the head {headCount} times, and the top {torsoCount} times.{' '}
      </p>
    </div>
  );
}
