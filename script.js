let cont = document.querySelector(".container");

let howMany = 32; //when adding prompt modify this value so I can change the loop amount


for(let i = 0; i < howMany; i++){
  let newGrid = document.createElement('div');
  newGrid.id = 'G'+i;
  newGrid.className = 'Grids';
  cont.appendChild(newGrid);
}

