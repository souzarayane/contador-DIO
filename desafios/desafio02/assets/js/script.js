let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

function increment(){
    currentNumber += 1
    if(currentNumber >= 0 && currentNumber <= 10){
        currentNumberWrapper.innerHTML = currentNumber
    }
}

function decrement(){
    currentNumber -= 1
    if(currentNumber < 0 && currentNumber >= -10){
        currentNumberWrapper.innerHTML = currentNumber
    }
}