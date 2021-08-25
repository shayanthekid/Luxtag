
import './App.css';
import TxtEditor from './components/TxtEditor';
import React, { useState } from 'react';
import Button from './components/Button';

function App() {
const [html,setHtml] = useState();


 
  return (
    <div className="App">
      <TxtEditor setHtml={setHtml}  />
   
   <div dangerouslySetInnerHTML={{__html: html}} />
    </div>
  );
}

export default App;
