import React, { useState } from "react";
import iphone from "../SVG/black-mockup.svg";
import useMediaQuery from "../useMediaQuery";
function Mockup({ html }) {
  //set state for button
  const [state, setState] = useState(false);
  //set state to capture html prop
  const [render, setRender] = useState();

  //will handle the onclick by setting state to true and setting render to html
  const handleClick = () => {
    setState(true);
    setRender(html);
  };

  //imported matches from media query function
  const matches = useMediaQuery("(max-width:769px)");

  return (
    <div className="btn">
      {/* will show button if media query exeeds given ammount */}
      {matches ? null : (
        <button className onClick={handleClick}>
          Render
        </button>
      )}

      <div className="mockup">
        <img className="iphone" src={iphone} alt="" />

        {/* will export render as html elements  */}
        {state ? (
          <div
            className="content"
            dangerouslySetInnerHTML={{ __html: render }}
          />
        ) : null}
      </div>
    </div>
  );
}

export default Mockup;
