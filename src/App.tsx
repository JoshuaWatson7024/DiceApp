import React from 'react';
import './App.css';
import {Dice} from './Components/Dice'

function App() {
  return (
    <div className="App">
      <Dice val={1}></Dice>
      <Dice val={2}></Dice>
    </div>
  );
}

export default App;
