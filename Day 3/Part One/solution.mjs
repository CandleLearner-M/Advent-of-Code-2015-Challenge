import fs from 'fs';

const input = fs.readFileSync('../input.txt', 'utf8').trim();
// console.log(input);

// const input = '>';

function move(position, direction) {
   switch (direction) {
    case '^':
      position[0]++;
    break;
    case 'v':
      position[0]--;
    break;
    case '>':
      position[1]++;
    break;
    case '<':
      position[1]--;
      break;
    }
  }

  const santa = [0, 0], robo = [0, 0];

const houses = new Set();
houses.add('0,0');
for (let i = 0; i < input.length; i++) {
  const direction = input[i];
  if (i % 2 === 0) {

   
  } else {
  }
}



console.log(houses.size);