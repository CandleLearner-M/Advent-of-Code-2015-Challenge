import fs from 'fs';

const input = fs.readFileSync('../input.txt', 'utf8').trim().split(/\r?\n/)
// console.log(input)

let totalArea = 0;

for (const line of input) {
  const [l, w, h] = line.split('x').map(Number);
  const a = l * w, b = l * h, c = w * h;
  totalArea += (2 * (a + b + c)) + Math.min(a, b, c);

}

// for (const dimensionsX of input) {
//   const dimsArr = dimensionsX.split('x').map(Number);
//   const area1 = dimsArr[0] * dimsArr[1];
//   const area2 = dimsArr[0] * dimsArr[2];
//   const area3 = dimsArr[1] * dimsArr[2];
//   let minArea = area1;
//   if (minArea > area2) minArea = area2;
//   if (minArea > area3) minArea = area3;

//   totalArea += (2 * (area1 + area2 + area3)) + minArea;

// }
console.log(totalArea);