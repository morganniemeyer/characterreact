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
  return (
    <main>
      <div>
        <Controls {...{ setHead, countHead, setTorso, countTorso, setBottoms }} />
        <Display {...{ head, torso, bottoms }} />
      </div>
      <Catch {...{ headCount, torsoCount }} />
    </main>
  );
}
