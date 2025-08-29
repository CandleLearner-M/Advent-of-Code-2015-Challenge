import fs from 'fs';

const input = fs.readFileSync('../input.txt', 'utf8').trim().split(/\r?\n/)
// console.log(input)

let ribbonFeet = 0;

for (const line of input) {
  const dimArr = line.split('x').map(Number);
  const 

}