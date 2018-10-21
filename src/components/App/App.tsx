import * as React from 'react';
import setTheme from 'src/utils/setTheme';
import { container, controls, logo } from './App.scss';
import icon from 'assets/react-icon.svg';

const App = () => (
  <div className={container}>
    <h1>css-modules theming example</h1>
    <div className={logo} dangerouslySetInnerHTML={{ __html: icon }} />
    <div className={controls}>
      <button onClick={() => setTheme('light')}>Light</button>
      <button onClick={() => setTheme('dark')}>Dark</button>
    </div>
  </div>
);

export default App;
