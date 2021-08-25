import React, { useState } from "react";
import iphone from "../SVG/black-mockup.svg";
import useMediaQuery from "../useMediaQuery";
function Mockup({ html }) {
  const [state, setState] = useState(false);
  const [render, setRender] = useState();
  const [custom,setCustom] = useState('');
  const handleClick = () => {
    setState(true);
    setRender(html);
  };
const matches = useMediaQuery("(max-width:769px)");

  return (
    <div className="btn">
      {matches ? '':  <button className onClick={handleClick}>Render</button>}
     
      <div className="mockup">
        <img className="iphone" src={iphone} alt="" />

         {state ? <div className="content" dangerouslySetInnerHTML={{ __html: render }} /> : null}
      </div>
    </div>
  );
}

export default Mockup;
