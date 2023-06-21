import { useState } from 'react';
import './App.css';
import Main from './Main';

function App() {

  const [theme, setTheme] = useState('light');

  function toggleTheme() {
    setTheme((theme) => { return theme == 'light' ? 'dark' : 'light' })
  }

  return (
    <div className="parent-div" theme={theme}>
      <div id='headerImage'></div>
      <Main toggleTheme={toggleTheme}/>
    </div>
  );
}

export default App;
