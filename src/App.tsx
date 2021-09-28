import { wait, waitFor } from '@testing-library/dom';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import React, { useState } from 'react';
import { threadId } from 'worker_threads';
import './App.css';
import {DiceTable} from './Components/DiceTable'
import {Dice} from './interfaces/dice'

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));

  function roll(): void{
    for (let i = 0; i<5; i++){
      setTimeout(() => {setMyDice(new Dice(myDice.getNewVals()));;}, 100*i);
    }
  }

  return (
    <div className="App">
      <button onClick={() => roll()}>Roll Dice</button>
      <DiceTable data-testId = "Dice" myDice = {myDice}></DiceTable>
    </div>
  );
}

export default App;
