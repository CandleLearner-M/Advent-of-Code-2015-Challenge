import fs from 'fs';

const input = fs.readFileSync('../input.txt').toString().trim();

// Seeking the position of the first character that that causes Santa to enter basement -1

const basement = -1;
let floor = 0;
let n = 0;

for (const char of input) {
 
  floor += char === '(' ? 1: -1;
  n++;

  if (floor === basement) 
    break;
}
console.log(n);