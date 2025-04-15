import goblinImage from './assets/goblin.png';

const grid = document.getElementById('grid');
for (let i = 0; i < 16; i += 1) {
  const cell = document.createElement('div');
  cell.className = 'cell';
  grid.appendChild(cell);
}

const cells = document.querySelectorAll('.cell');
const goblin = new Image();
goblin.src = goblinImage;
let currentCell = cells[0];
currentCell.appendChild(goblin);

setInterval(() => {
  let newCell;
  do {
    newCell = cells[Math.floor(Math.random() * 16)];
  } while (newCell === currentCell);
  newCell.appendChild(goblin);
  currentCell = newCell;
}, 1000);
