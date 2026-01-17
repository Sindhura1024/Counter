let counterVal = document.getElementById("counterContent");
let incrementButton = document.getElementById("incrementBtn");
let decrementButton = document.getElementById("decrementBtn");

function onIncrement(){
    let prevVal = counterVal.textContent;
    console.log(prevVal);
    let updatedVal = parseInt(prevVal)+1;
    console.log(updatedVal);
    if (updatedVal > 0){
        counterVal.style.color = "green";
    }
    else if (updatedVal < 0){
        counterVal.style.color = "red";
    }
    else{
        counterVal.style.color = "black";
    }
    counterVal.textContent = updatedVal;
}

function onDecrement(){
    let prevVal = counterVal.textContent;
    console.log(prevVal);
    let updatedVal = parseInt(prevVal)-1;
    console.log(updatedVal);
    if (updatedVal > 0){
        counterVal.style.color = "green";
    }
    else if (updatedVal < 0){
        counterVal.style.color = "red";
    }
    else{
        counterVal.style.color = "black";
    }
    counterVal.textContent = updatedVal;
}

function onReset(){
    counterVal.style.color = "black";
    counterVal.textContent = 0;
}

