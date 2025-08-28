import fs from 'fs';

let floor = 0;

const input = fs.readFileSync('../input.txt').toString();

// for (let i = 0; i < input.length; i++) {
//   if (input[i] === '(') {
//     floor++;
//   } else if (input[i] === ')') {
//     floor--;
//   }
// }

floor = [...input].reduce((acc, curr) => curr === '(' ? acc + 1: acc - 1, 0);

console.log(floor);