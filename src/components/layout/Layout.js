import React, { useState } from 'react';
import Catch from '../catchphrases/Catch.js';
import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import './layout.css';

export default function Layout() {
  const [head, setHead] = useState('dollar');
  const [headCount, countHead] = useState(0);
  const [torso, setTorso] = useState('blouse');
  const [torsoCount, countTorso] = useState(0);
  const [bottoms, setBottoms] = useState('overalls');
  const [bottomsCount, countBottoms] = useState(0);
  const [phrases, setPhrases] = useState([]);
  return (
    <main>
      <div>
        <Controls
          {...{ setHead, countHead, setTorso, countTorso, setBottoms, countBottoms, setPhrases }}
        />
        <Display {...{ head, torso, bottoms }} />
      </div>
      <Catch {...{ headCount, torsoCount, bottomsCount, phrases }} />
    </main>
  );
}
