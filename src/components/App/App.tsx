import * as React from 'react';
import setTheme from 'src/utils/setTheme';
import { container, controls } from './App.scss';

const App = () => (
  <div className={container}>
    <h1>css-modules theming example</h1>
    <div className={controls}>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  </div>
);

export default App;
