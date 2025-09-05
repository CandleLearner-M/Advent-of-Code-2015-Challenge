const md5 = require('crypto-js/md5');
const Hex = require('crypto-js/enc-hex'); // Import the Hex encoder

const input = 'ckczppom';

// Test basic MD5 functionality
const hash = md5(input).toString(Hex);
console.log(hash);

// Find the lowest positive number that produces a hash starting with 5 zeros
let number = 0;
while(true) {
  number++;
  const stringHashed = md5(`${input}${number}`).toString(Hex);
  if (stringHashed.startsWith('000000')) {
    break;
  }
}

console.log(number);