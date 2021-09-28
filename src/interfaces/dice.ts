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

    getNewVals(): number[]{
        let vals: number[] = [];
        for (let i = 0; i < this.diceArr.length; i++){
            vals.push(getRandomNumber(1,6));
        }
        return vals;
    }
}