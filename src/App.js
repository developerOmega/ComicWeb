import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';


function HolaMundo(props) {
  const calc = () => parseInt(props.n1) * parseInt(props.n2);
  const [num, setNum] = useState( calc() );

  return(
    <div>
      <div> Hola { props.name } </div> 
      <div> El producto de {props.n1} y {props.n2} es { num } </div>
      <button type="button" onClick={ () => setNum(num * props.n2) } > Press per {props.n2} </button>
    </div>
  );
}

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <HolaMundo 
          name="Daniel"
          n1="12"
          n2="2"
        />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
