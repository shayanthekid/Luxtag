import React, { useState } from "react";
import iphone from "../SVG/black-mockup.svg";

function Mockup({ html }) {
  const [state, setState] = useState(false);
  const [render, setRender] = useState();
  const handleClick = () => {
    setState(true);
    setRender(html);
  };

  return (
    <div className="">
      <button onClick={handleClick}>Render</button>
      <div className="mockup">
        <img className="iphone" src={iphone} alt="" />

         {state ? <div className="content" dangerouslySetInnerHTML={{ __html: render }} /> : null}
      </div>
    </div>
  );
}

export default Mockup;
