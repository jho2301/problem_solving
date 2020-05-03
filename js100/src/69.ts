function isPrime(nbr: number): boolean {
  let i: number = 2;

  while (i * i < nbr) {
    if (nbr % i === 0) return false;
    i++;
  }
  return true;
}

function getnextPrime(nbr: number): number {
  while (true) {
    nbr++;
    if (isPrime(nbr)) return nbr;
  }
}

function getPrevPrime(nbr: number): number {
  while (1 < nbr) {
    nbr--;
    if (isPrime(nbr)) return nbr;
  }
  return -1;
}

function goldbachConjecture(evenNbr: number): number[][] {
  const result: number[][] = [];

  let prime1: number = 2;
  let prime2: number = getPrevPrime(evenNbr);

  while (prime1 < evenNbr / 2) {
    while (evenNbr <= prime1 + prime2) {
      if (prime1 + prime2 === evenNbr) result.push([prime1, prime2]);
      prime2 = getPrevPrime(prime2);
    }
    prime1 = getnextPrime(prime1);
  }
  return result;
}

console.log(goldbachConjecture(56));
