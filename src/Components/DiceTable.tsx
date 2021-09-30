import React, { useState } from 'react';
import {Dice} from '../classes/dice';
import dice1 from '../Assets/dice1.png'
import dice2 from '../Assets/dice2.png'
import dice3 from '../Assets/dice3.png'
import dice4 from '../Assets/dice4.png'
import dice5 from '../Assets/dice5.png'
import dice6 from '../Assets/dice6.png'

export const DiceTable = ({myDice}:
    {myDice: Dice}
): JSX.Element => {

    let image_locations: string[] = [];
    for (let i = 0; i < myDice.diceArr.length; i++){
        image_locations[i] = (
            myDice.diceArr[i].val == 1? dice1:
            myDice.diceArr[i].val == 2? dice2:
            myDice.diceArr[i].val == 3? dice3:
            myDice.diceArr[i].val == 4? dice4:
            myDice.diceArr[i].val == 5? dice5:
            myDice.diceArr[i].val == 6? dice6:
            ""
        );
    }

    return(
        <div className="Dice">
                <img className="Die" data-testId = "diceimg1" src={image_locations[0]}></img>
                <img className="Die" data-testId = "diceimg2" src={image_locations[1]}></img>
        </div>
    );
}

