import React from 'react';

export default function Controls({ setHead, countHead }) {
  const heads = ['cry', 'dollar', 'rage', 'sleep', 'smile'];

  const handleHead = (event) => {
    setHead(event.target.value);
    countHead((currentState) => {
      return currentState + 1;
    });
  };

  return (
    <div className="forms">
      Controls
      <select onChange={handleHead}>
        {heads.map((headItem) => (
          <option key={headItem} value={headItem}>
            {headItem}
          </option>
        ))}
        ;
      </select>
    </div>
  );
}
