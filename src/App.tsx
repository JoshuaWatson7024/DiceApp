import React, { useState } from 'react';
import './App.css';
import {DiceTable} from './Components/DiceTable'
import {Die, Dice} from './interfaces/dice'

function App() {
  const[d1, setd1] = useState<Die>({val:1});
  const[d2, setd2] = useState<Die>({val:0});
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));

  return (
    <div className="App">
      <DiceTable myDice = {myDice}></DiceTable>
    </div>
  );
}

export default App;
