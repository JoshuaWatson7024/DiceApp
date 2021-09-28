import { wait, waitFor } from '@testing-library/dom';
import { SSL_OP_EPHEMERAL_RSA } from 'constants';
import React, { useState } from 'react';
import { threadId } from 'worker_threads';
import './App.css';
import {DataTable} from './Components/DataTable'
import {DiceTable} from './Components/DiceTable'
import {Dice} from './classes/dice'
import { getRandomNumber, delay } from "./Utilities/Helpers";

function App() {
  const[myDice, setMyDice] = useState<Dice>(new Dice([0,0]));
  const[s, setS] = useState<boolean>(false);
  // In order from 2's to 12's
  const[dataForTable, setDataForTable] = useState<Array<number>>([0,0,0,0,0,0,0,0,0,0,0]);

  async function roll(): Promise<void>{
    // Know the future
    let val1: number = getRandomNumber(1,6);
    let val2: number = getRandomNumber(1,6);
    let sum: number = val1+val2;

    //animation
    let lenAnimation = getRandomNumber(8,10);
    for (let i = 0; i<lenAnimation-1; i++){
      await delay(100);\
      setMyDice(new Dice(myDice.getNewVals()));
    }
    // End on predestined value
    await delay(100);
    setMyDice(new Dice([val1, val2]));

    // Update data
    let tempData: number[] = dataForTable;
    tempData[sum-2] = tempData[sum-2] + 1;
    setDataForTable(tempData);
    //this makes it so my table updates
    setS(!s);
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
