import React from 'react'
import iphone from "../SVG/black-mockup.svg";

function Mockup(html) {
    return (
        <div className="mockup">
            <img className="iphone" src={iphone} alt="" />
            <p className="content">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti, placeat aspernatur ullam impedit ab explicabo et quo nihil ratione dicta, sint nesciunt eaque. Temporibus, maxime perspiciatis iste architecto dolores dolore.</p>
        </div>
    )
}

export default Mockup
