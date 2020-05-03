function handshake(totalHandshake: number): number[] {
  let handshakes: number = 0;
  let i: number = 0;

  for (; handshakes < totalHandshake; i++) handshakes += i;
  return [i - 1 - (handshakes - totalHandshake), i];
}

console.log(handshake(59));
