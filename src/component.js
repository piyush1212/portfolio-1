// Listener 

import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(document.getElementById("root"));

// const user = {}

const onClickBtn = () => {
    alert(`Clicked on Button`)
}

const container = (
    <>
        <div>Container 1</div>
        <div>Container 2</div> 
        <button onClick={onClickBtn}
        onMouseEnter={() => console.log("Mouse Entered")}
        onMouseMove={() => console.log("Mouse moved")}
        >Click Me</button>
        
    </>
);


const User = (name, age) => {
    return (
      <div>
        <p>Name : {name}</p>
        <b>Age : {age}</b>
      </div>  
    );
};


// root.render(<>
// {container1} {container2}
// </>)

// root.render(user("Pihskbkjbs", 20))

root.render(<User name="Joyyyff" age="45" />)