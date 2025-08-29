import fs from 'fs';

const input = fs.readFileSync('../input.txt', 'utf8').trim().split(/\r?\n/)
// console.log(input)

let ribbon = 0;

// for (const line of input) {
//   const [l, w, h] = line.split('x').map(Number);
//   const arr = [l, w, h];
//   const smallest = Math.min(l, w, h);
//   const [a, b] = arr.filter((_, index) => 
//   index !== arr.indexOf(smallest));
  
//   const secondSmallest = Math.min(a, b);
//   // console.log(smallest, secondSmallest);


//     // console.log(ribbonFeet, l, w, h, a, b)
//   ribbonFeet += (l*w*h) + (2 * (smallest + secondSmallest));
//   // console.log(ribbonFeet)
// }

for (const line of input) {
  const [l, w, h] = line.split('x').map(Number);
  const perimeter = 2 * (l + w + h - Math.max(l, w, h));
  const cube = l * w * h;
  ribbon += perimeter + cube;
}

console.log(ribbon);