export function randomNumber(limit: number): number {
  const { ceil, random } = Math
  return ceil(random() * limit) - 1
}

export enum Choice {
  "piedra",
  "papel",
  "tijera"
}

export function setUserChoice(userChoice: string): string {
  let choice = parseInt(userChoice)
  return Choice[choice]
}