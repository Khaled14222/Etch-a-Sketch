let cont = document.querySelector(".container");
let howMany;

document.querySelector('.btn').addEventListener('click', () => {
  cont.replaceChildren();
  howMany = prompt("How many Grids do you want?: ");
    if(howMany > 100){
      howMany = prompt("How many Grids do you want?: ");
    } else{
      for(let i = 0; i < howMany*howMany; i++){
      let newGrid = document.createElement('div');
      newGrid.id = 'G'+i;
      newGrid.className = 'Grids';
      cont.appendChild(newGrid);

     /*newGrid.addEventListener('mouseenter', () => {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        
        newGrid.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
      });*/
      
    }
  }
})



