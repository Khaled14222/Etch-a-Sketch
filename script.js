let cont = document.querySelector(".container");


let howMany = 0;

document.querySelector('.btn').addEventListener('click', () => {
    howMany = prompt("How many Grids do you want?: ");
    console.log(howMany);
    
    for(let i = 0; i < howMany; i++){
      let newGrid = document.createElement('div');
      newGrid.id = 'G'+i;
      newGrid.className = 'Grids';
      cont.appendChild(newGrid);
    }
    return howMany
})



