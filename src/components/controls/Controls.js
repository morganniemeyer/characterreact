import React from 'react';
import { useState } from 'react';

export default function Controls({
  setHead,
  countHead,
  setTorso,
  countTorso,
  setBottoms,
  countBottoms,
  setPhrases,
}) {
  const heads = ['dollar', 'cry', 'rage', 'sleep', 'smile'];
  const torsos = ['blouse', 'hawaii', 'jumper', 'suit', 'tank-top'];
  const bottoms = ['overalls', 'pants', 'sweats', 'widecut', 'jeans'];
  const [input, textBox] = useState('');

  const handleHead = (event) => {
    setHead(event.target.value);
    countHead((currentState) => {
      return currentState + 1;
    });
  };
  const handleTorso = (event) => {
    setTorso(event.target.value);
    countTorso((currentState) => {
      return currentState + 1;
    });
  };
  const handleBottoms = (event) => {
    setBottoms(event.target.value);
    countBottoms((currentState) => {
      return currentState + 1;
    });
  };
  const handleAddPhrase = () => {
    setPhrases((currentState) => [input, ...currentState]);
    textBox('');
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
      <select onChange={handleTorso}>
        {torsos.map((torsoItem) => (
          <option key={torsoItem} value={torsoItem}>
            {torsoItem}
          </option>
        ))}
        ;
      </select>
      <select onChange={handleBottoms}>
        {bottoms.map((bottomItem) => (
          <option key={bottomItem} value={bottomItem}>
            {bottomItem}
          </option>
        ))}
        ;
      </select>
      <input value={input} type="text" onChange={(e) => textBox(e.target.value)} />
      <button onClick={handleAddPhrase}>Submit</button>
    </div>
  );
}
