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
}