import React from 'react';
import { createRoot } from 'react-dom/client';

// const button = <button className='btn'>Click Me</button>

const userName = "Enter Username : ";
const inputId = "email";
const name = "Piyush";

const sum = (a, b) => {
  console.log(a+b);
  return a+b;
}

const names = ["Piyush", "Amit", "Ajay"];
const elements = names.map((names, index) => <p key={index}>{names}</p>)

const container = <div id='container' className='abc xyz sdvdv' data-name='piyush'>
  {/* <label htmlFor={inputId}>{userName}</label> */}
  {/* <input type="email" name="email" id={inputId} placeholder='Email' /> */}

  {/* <b>Piyush</b> */}

  {/* <b>{name}</b> */}
  {/*                   <b>{ {name:"Piyush", age: 20} }</b>       ------     Wrong */}
  

  {/* <b>{[10, 20, 30, "Piyush"]}</b> */}

  {/* <p>{["Piyush", <b>Amit</b>, <span>{(10 % 2 == 0) ? "Piyush" : "Adsdghfjh"}</span>]}</p> */}

  {/* {sum(10, 2)} */}

  <ul>
    {elements}
  </ul>

  {/* <button className='btn'>Click me</button> */}
</div>




const root = createRoot(document.getElementById("root"));

root.render(container);