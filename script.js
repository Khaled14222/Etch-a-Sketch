let cont = document.querySelector(".container");


let howMany;

document.querySelector('.btn').addEventListener('click', () => {
  cont.replaceChildren();
  howMany = prompt("How many Grids do you want?: ");
    if(howMany > 100){
      howMany = prompt("How many Grids do you want?: ");
    } else{
      for(let i = 0; i < howMany; i++){
      let newGrid = document.createElement('div');
      newGrid.id = 'G'+i;
      newGrid.className = 'Grids';
      cont.appendChild(newGrid);
    }
  }

    console.log(howMany);



    return howMany
})



