describe('Game', () => {
  beforeEach(() => {
    document.body.innerHTML = '<div class="grid" id="grid"></div>';
  });

  test('should create 16 cells', () => {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      grid.appendChild(cell);
    }
    expect(document.querySelectorAll('.cell').length).toBe(16);
  });

  test('should place goblin in a random cell', () => {
    const grid = document.getElementById('grid');
    for (let i = 0; i < 16; i += 1) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      grid.appendChild(cell);
    }
    const cells = document.querySelectorAll('.cell');
    const goblin = new Image();
    const randomIndex = Math.floor(Math.random() * cells.length);
    cells[randomIndex].appendChild(goblin);
    expect(cells[randomIndex].querySelector('img')).toBeTruthy();
  });
});
