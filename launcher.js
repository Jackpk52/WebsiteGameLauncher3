const games = [
  "tetris","pong","snake","breakout","flappy","racer","invaders","chess","minesweeper","platformer"
];
const menu = document.getElementById('menu');
const frame = document.getElementById('gameFrame');
const coming = document.getElementById('coming');

games.forEach(g => {
  const b = document.createElement('div');
  b.className = 'game-btn';
  b.innerText = g.toUpperCase();
  b.onclick = () => loadGame(g);
  menu.appendChild(b);
});

function loadGame(name){
  coming.classList.add('hidden');
  frame.classList.remove('hidden');
  frame.src = `games/${name}/index.html`;
}

// load first game by default
loadGame('tetris');
