
import './App.css';
import TxtEditor from './components/TxtEditor';
import React, { useState } from 'react';
import Button from './components/Button';
import Mockup from './components/Mockup';

function App() {
const [html,setHtml] = useState();


 
  return (
    <div className="App">
      <TxtEditor setHtml={setHtml}  />
      <Button html={html} />
      <Mockup />
    </div>
  );
}

export default App;
