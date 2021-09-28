import React, { useState } from 'react';
import './App.css';
import {DiceTable} from './Components/DiceTable'
import {Dice} from './interfaces/dice'
import dice1 from './Assets/dice1.png'
import dice2 from './Assets/dice2.png'
import dice3 from './Assets/dice3.png'
import dice4 from './Assets/dice4.png'
import dice5 from './Assets/dice5.png'
import dice6 from './Assets/dice6.png'

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));

  function roll(): void{
    setMyDice(new Dice(myDice.getNewVals()))
  }

  return (
    <div className="App">
      <button onClick={() => roll()}>Roll Dice</button>
      <DiceTable data-testId = "Dice" myDice = {myDice}></DiceTable>
      <img src={dice1} alt="1"></img>
    </div>
  );
}

export default App;
