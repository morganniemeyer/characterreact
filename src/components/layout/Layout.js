import React, { useState } from 'react';
import Catch from '../catchphrases/Catch.js';
import Controls from '../controls/Controls.js';
import Display from '../display/Display.js';
import './layout.css';

export default function Layout() {
  const [head, setHead] = useState();
  return (
    <main>
      <div>
        <Controls {...{ setHead }} />
        <Display {...{ head }} />
      </div>
      <Catch />
    </main>
  );
}
