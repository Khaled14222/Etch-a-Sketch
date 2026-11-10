let cont = document.querySelector(".container");

let howMany = 16;

for(let i = 0; i < howMany; i++){
  let newGrid = document.createElement('div');
  newGrid.id = 'G'+i;
  newGrid.className = 'Grids';
  cont.appendChild(newGrid);
}

