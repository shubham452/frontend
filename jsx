JSX

// 1) Import the React and ReactDOM libraries
import React from 'react';
import ReactDOM from 'react-dom/client';

// 2) Get a reference to the div with ID root
const el = document.getElementById('root');

// 3) Tell React to take control of that element
const root = ReactDOM.createRoot(el);

// 4) Create a component
function App() {
  return <h1>Hi there!</h1>;
}

// 5) Show the component on the screen
root.render(<App />);
----------------------------------------------------------

->PRINTING JSX
.Use curly braces whenever printing jsx

function App() {
  return <h1>{new Date().toLocaleTimeString()}</h1>;
}
-------------------------------------------------------------
  COMPONENT LAYOUT
function App() {
  const name = 'Samantha';
  const age = 23;

  return (
    <h1>
      Hi, my name is {name} and my age is {age}
    </h1>
  );
}
_________________________________________________________
CUSTOMIZING ELEMENTS WITH PROPS

function App(){
const config = {color: 'red'}
return (
  <div>
    //trying to display an object .DOES'NT WORK
    <h1>{config}</h1>

    //trying to provide an object as a prop. OK
    <input abc={config}/>
  </div>
}

ANother example
function App() {
  return <input style={{ border: '3px solid red' }} type="number" min={5} />;
}
_________________________________________________________
 
