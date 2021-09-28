import React, { useState } from 'react';
import {Dice} from '../interfaces/dice';

export const DiceTable = ({myDice}:
    {myDice: Dice}
): JSX.Element => {
    return(
        <div>
            {myDice.diceArr[0].val}
            {myDice.diceArr[1].val}
        </div>
    );
}

