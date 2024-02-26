// EX: Se da un numar. Afisati cate cifre are respectivul numar.

let numar = 352;
let numarCifre = 0;

while (numar > 0) {
  numar = parseInt(numar / 10);
  //   console.log(numar);
  numarCifre++;
}
console.log(numarCifre);

// 1. Declarati o variabila numita year. Daca anul respectiv este bisect,
// afisati la consola "Anul este bisect", altfel afisati "Anul nu este bisect".

// EX:
var year = 2019; // should console.log "Anul este bisect"
// year = 2019; // should console.log "Anul nu este bisect"

if (year % 400 == 0 || (year % 4 == 0 && !(year % 100 == 0))) {
  console.log("Anul este bisect");
} else {
  console.log("Anul nu este bisect");
}

// 2. Se dau 3 numere(variati valorile lor). Comparand cele 3 numere,
// salvati intr-o variabila numita "max" valoarea maxima.

// EX:
var nr1 = 4;
var nr2 = 5;
var nr3 = 1;
var result; // should be 5
if (nr1 > nr2) {
  if (nr1 > nr3) {
    result = nr1;
  }
} else if (nr2 > nr3) {
  result = nr2;
} else {
  result = nr3;
}

console.log(result);

// 3. Folosind structuri repetitive, afisati la consola primele 10 numere,
// in ordine DESCRESCATOARE!

// EX: 10, 9, 8, ..., 1 (afisate rand pe rand)
let y = 10;
while (y > 0) {
  console.log(`Primele 10 numere ${y}`);
  y--;
}

// 4. Folosind structuri repetitive, calculati suma primelor 10 numere naturale.
let sum = 0;
let i = 0;
while (i <= 10) {
  sum += i;
  i++;
}
console.log(`Suma primelor 10 numere naturale ${sum}`);

// EX: 55 trebuie sa fie raspunsul final
