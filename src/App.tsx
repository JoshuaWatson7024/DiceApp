import React, { useState } from 'react';
import './App.css';
import {DiceTable} from './Components/DiceTable'
import {Dice} from './interfaces/dice'

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));

  function roll(): void{
    setMyDice(new Dice(myDice.getNewVals()))
  }

  return (
    <div className="App">
      <button onClick={() => roll()}>Roll Dice</button>
      <DiceTable myDice = {myDice}></DiceTable>
    </div>
  );
}

export default App;
