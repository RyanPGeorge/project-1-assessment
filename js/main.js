/*----- constants -----*/

// just one variable number that will change with each click that should display 1 on init..

/*----- app's state (variables) -----*/

let number;

/*----- cached element references -----*/

let inputHolder = document.querySelector('input');
//let outputHolder = document.querySelector('output');

/*----- event listeners -----*/

document.getElementById('plus').addEventListener('click', addInput);
document.getElementById('minus').addEventListener('click', subInput);

/*----- functions -----*/
init()

function init(){
   number = 0;
   inputHolder.value = 1;
   render();
}

function render(){
    output.innerHTML = number;
}

function addInput(){
    number += parseInt(inputHolder.value);
    render();
}

function subInput(){
    number -= parseInt(inputHolder.value);
    render();
}





