import React from 'react';

export default function Controls({ setHead }) {
  const heads = ['cry', 'dollar', 'rage', 'sleep', 'smile'];

  const handleHead = (event) => {
    setHead(event.target.value);
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
