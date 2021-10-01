/**
 * Gives a random number lower to upper
 * @param
 * @returns Random whole number from lower to upper (inclusive)
 */
 export function getRandomNumber(lower: number, upper: number): number {
    return Math.floor(Math.random()*(upper-lower+1) + lower);
  }

  //https://stackoverflow.com/questions/51633328/how-to-pause-a-function-in-typescript
  export function delay(timeInMillis: number): Promise<void> {
    return new Promise((resolve) => setTimeout(() => resolve(), timeInMillis));
  }

  export function setDataColors(data: number[]): void{
    let rg: number[] = [0,0,0,0,0,0,0,0,0,0,0];
    let max: number = data[0];
    for (let i=1; i<data.length; i++){
      if (data[i] > max){
        max = data[i];
      }
    }
    if (max === 0){
      return;
    }
    for (let i=0; i<data.length; i++){
      rg[i] = 255*(1-data[i]/max);
      document.getElementById((i+2).toString()+"a")?.style.setProperty("background-color", "rgb("+rg[i].toString()+","+rg[i].toString()+",255)");
      document.getElementById((i+2).toString()+"b")?.style.setProperty("background-color", "rgb("+rg[i].toString()+","+rg[i].toString()+",255)");
  }
}