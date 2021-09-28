/**
 * Gives a random number lower to upper
 * @param
 * @returns Random whole number from lower to upper (inclusive)
 */
 export function getRandomNumber(lower: number, upper: number): number {
    return Math.floor(Math.random()*upper + lower);
  }