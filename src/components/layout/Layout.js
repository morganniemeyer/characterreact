import React, { useState } from 'react';
import Catch from '../catchphrases/Catch.js';
import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import './layout.css';

export default function Layout() {
  const [head, setHead] = useState();
  const [headCount, countHead] = useState(0);
  return (
    <main>
      <div>
        <Controls {...{ setHead, countHead, headCount }} />
        <Display {...{ head }} />
      </div>
      <Catch {...{ headCount }} />
    </main>
  );
}
