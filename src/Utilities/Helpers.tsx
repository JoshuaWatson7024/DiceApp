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