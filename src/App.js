import "./App.css";
import TxtEditor from "./components/TxtEditor";
import React, { useState } from "react";

import Mockup from "./components/Mockup";
import useMediaQuery from "./useMediaQuery";
function App() {
  //setting state for html
  const [html, setHtml] = useState();
  //variable for the media query
  const matches = useMediaQuery("(max-width:769px)");

  return (
    <div className="App">
      {/* Will show the editor if max-width exeeds given amount else show only mockup */}
      {matches ? null : (
        <div className="editor">
          <div className="head">
            <h1>Customisation</h1>
            <span>The text will reflet mobile view</span>
          </div>
          {/* setHtml called to set prop with value */}
          <TxtEditor setHtml={setHtml} />
        </div>
      )}

      <Mockup html={html} />
    </div>
  );
}

export default App;
