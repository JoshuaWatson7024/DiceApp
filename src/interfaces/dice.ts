import { getRandomNumber } from "../Utilities/Helpers";

export interface Die {
    val: number;
}
export class Dice{
    diceArr: Die[];

    constructor(vals: number[]){
        let darr: Die[] = [];
        for (let i = 0; i < vals.length; i++){
            let d: Die = {val:vals[i]};
            darr.push(d);
        }
        this.diceArr = darr;
    }

    roll(){
        for (let i = 0; i < this.diceArr.length; i++){
            this.diceArr[i].val = getRandomNumber();
        }
    }
}