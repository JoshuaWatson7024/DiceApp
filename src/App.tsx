import { wait, waitFor } from '@testing-library/dom';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import React, { useState } from 'react';
import { threadId } from 'worker_threads';
import './App.css';
import {DataTable} from './Components/DataTable'
import {DiceTable} from './Components/DiceTable'
import {Dice} from './classes/dice'
import { getRandomNumber } from "./Utilities/Helpers";

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));
  // In order from 2's to 12's
  const[dataForTable, setDataForTable] = useState<Array<number>>([0,0,0,0,0,0,0,0,0,0,0]);

  function roll(): void{
    let val1: number = getRandomNumber(1,6);
    let val2: number = getRandomNumber(1,6);
    let sum: number = val1 + val2;
    let tempData: number[] = dataForTable;

    tempData[sum-2] = tempData[sum-2] + 1;
    setDataForTable(tempData);

    //animation
    let lenAnimation = getRandomNumber(8,10);
    for (let i = 0; i<lenAnimation; i++){
      setTimeout(() => {setMyDice(new Dice(myDice.getNewVals()));;}, 100*(i^1.9));
    }
    //make sure I end on the predestined values
    setTimeout(() => {setMyDice(new Dice([val1,val2]));;}, 100*((lenAnimation+1)^1.9));
  }
  

  return (
    <div className="App">
      <button onClick={() => roll()}>Roll Dice</button>
      <DiceTable data-testId = "Dice" myDice = {myDice}></DiceTable>
      <DataTable data-testId = "Data" dataForTable = {dataForTable}></DataTable>
    </div>
  );
}

export default App;
