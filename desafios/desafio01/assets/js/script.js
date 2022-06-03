const element01 = document.getElementById("btn-increment");
element01.addEventListener("click", increment);

const element02 = document.getElementById("btn-decrement");
element02.addEventListener("click", decrement);

let currentNumber = 0

function increment(){
    currentNumber += 1
    document.getElementById("currentNumber").innerHTML = currentNumber
}

function decrement(){
    currentNumber -= 1
    document.getElementById("currentNumber").innerHTML = currentNumber
}