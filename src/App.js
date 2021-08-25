
import './App.css';
import TxtEditor from './components/TxtEditor';
import React, { useState } from 'react';
import Button from './components/Button';
import Mockup from './components/Mockup';
import useMediaQuery from './useMediaQuery';
function App() {
const [html,setHtml] = useState();
const matches = useMediaQuery("(max-width:769px)");

 
  return (
    <div className="App">
      {matches ? null : (
        <div className="editor">
          <div className="head">
            <h1>Customisation</h1>
            <span>The text will reflet mobile view</span>
          </div>
          <TxtEditor setHtml={setHtml} />
        </div>
      )}

      <Mockup html={html} />
    </div>
  );
}

export default App;
