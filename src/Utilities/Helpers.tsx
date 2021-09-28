/**
 * Change a die's number to a random number
 * @param
 * @returns One randomly chosen element
 */
 export function getRandomElement<T>(items: T[]): T {
    return items[Math.floor(Math.random()*items.length)];
  }