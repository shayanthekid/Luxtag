
import TxtEditor from './TxtEditor'
import React, { useEffect, useState } from "react";

function Button({html}) {
const [state,setState] = useState(false);
const [render,setRender] = useState()
const  handleClick=()=> {
    setState(true)
    setRender(html)
  }


    return (
        <div>
     
            <button onClick={handleClick}>Render</button>
             
               {state ?  <div dangerouslySetInnerHTML={{__html: render}} /> : null}
             
        </div>
    )
}

export default Button
