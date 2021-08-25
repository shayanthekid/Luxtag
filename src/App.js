
import './App.css';
import TxtEditor from './components/TxtEditor';
import React, { useState } from 'react';
import Button from './components/Button';
import Mockup from './components/Mockup';

function App() {
const [html,setHtml] = useState();


 
  return (
    <div className="App">
      <div className="editor">
        <div className="head">
          <h1>Customisation</h1>
          <span>The text will reflet mobile view</span>
        </div>
        <TxtEditor setHtml={setHtml} />
      </div>
      <Mockup html={html} />
    </div>
  );
}

export default App;
