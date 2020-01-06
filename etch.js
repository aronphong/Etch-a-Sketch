const container = document.querySelector('#container');

container.style.display = "table";
container.style["margin-left"] = "auto";
container.style["margin-right"] = "auto";
container.style.width = "960px";

const resetButton = document.getElementById('resetbutton');
resetButton.addEventListener('click', resetGrid);

// default grid size 
let gridSize = 16;

function makeGrid(gridSize) {

  for (let i = 0; i < gridSize; i++) {

    const column = document.createElement('div');
      column.classList.add('column');
      column.style = "display: table-row"

      container.appendChild(column);

      for (let j = 0; j < gridSize; j++) {
          const row = document.createElement('div');
          row.classList.add("row");
          row.style.display = "table-cell";
          row.style["border-style"] = "dashed";
          row.style["border-width"] = "1px";
          row.style.height = "20px";
          container.appendChild(row);
      }
  }

  hoverEffect();

}


function resetGrid() {

  const table = document.querySelectorAll(".row");

  table.forEach((div) => {
    div.remove();
  })

  gridSize = prompt("How make squares do you want the grid to be?");

  makeGrid(gridSize);
}


function hoverEffect() {

  const divs = document.querySelectorAll(".row");

  divs.forEach((div) => {
    div.addEventListener('mouseenter', (e) => {
      div.style.backgroundColor = getRandomColor();
    });
  });
}


function getRandomColor() {

  const letters = '0123456789ABCDEF';
  let color = '#';

  for (let i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16 )];
  }
  return color; 
}

makeGrid(gridSize);
