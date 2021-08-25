import React, { useState } from "react";
import Mockup from "./Mockup";

function Button({ html }) {
  const [state, setState] = useState(false);
  const [render, setRender] = useState();
  const handleClick = () => {
    setState(true);
    setRender(html);
  };

  return (
    <div className="btn">
      <button onClick={handleClick}>Render</button>

      {state ? <div dangerouslySetInnerHTML={{ __html: render }} /> : null}

      
    </div>
  );
}

export default Button;
