import React, { useState } from 'react';
import './App.css';
import {DiceTable} from './Components/DiceTable'
import {Dice} from './interfaces/dice'

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));

  return (
    <div className="App">
      <DiceTable myDice = {myDice}></DiceTable>
    </div>
  );
}

export default App;
