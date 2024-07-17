export function GetModifier(value: number, bonus: number, penalty: number) {
  return Math.floor((value + bonus - penalty) / 2 - 5);
}
