// Scrieți un program care calculează suma cifrelor unui număr de 3 cifre.

const num = 456;

let sum = 0;
const str_num = String(num);

for (let i = 0; i < str_num.length; i++) {
  sum += Number(str_num[i]);
}

console.log(sum);
