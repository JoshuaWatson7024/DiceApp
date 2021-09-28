import { wait, waitFor } from '@testing-library/dom';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import React, { useState } from 'react';
import { threadId } from 'worker_threads';
import './App.css';
import {DiceTable} from './Components/DiceTable'
import {Dice} from './interfaces/dice'
import { getRandomNumber } from "./Utilities/Helpers";

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));
  // In order from 2's to 12's
  const[dataForChart, setDataForChart] = useState<Array<number>>([0,0,0,0,0,0,0,0,0,0,0]);

  function roll(): void{
    let val1: number = getRandomNumber(1,6);
    let val2: number = getRandomNumber(1,6);
    let sum: number = val1 + val2;
    let tempData: number[] = dataForChart;

    tempData[sum-2] = tempData[sum-2] + 1;

    //animation
    let lenAnimation = getRandomNumber(8,10);
    for (let i = 0; i<lenAnimation; i++){
      setTimeout(() => {setMyDice(new Dice(myDice.getNewVals()));;}, 100*(i^1.9));
    }
    //make sure I end on the predestined values
    setTimeout(() => {setMyDice(new Dice([val1,val2]));;}, 100*((lenAnimation+1)^1.9));

    console.log(dataForChart);
    
  }

  return (
    <div className="App">
      <button onClick={() => roll()}>Roll Dice</button>
      <DiceTable data-testId = "Dice" myDice = {myDice}></DiceTable>
    </div>
  );
}

export default App;
