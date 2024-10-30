import React, { useState } from "react";
import "./accordion.css"

function Accordion(props) {
    const [show, setShow] = useState(false)

  return (
    <><div className="text-section">
    <h1>{props.title}</h1>
    <button onClick={() => setShow(!show)}>{show? "-" : "+"}</button>
    </div>

    <div className="paragraph-section">
    {
        show && <p>{props.info}</p>
    }
    </div>
   
    </>
  )
}

export default Accordion;
