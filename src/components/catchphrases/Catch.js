import React from 'react';

export default function Catch({ headCount, torsoCount, bottomsCount }) {
  return (
    <div>
      <p>
        {' '}
        You have changed the head {headCount} times, the top {torsoCount} times, and the bottoms{' '}
        {bottomsCount} times.{' '}
      </p>
    </div>
  );
}
