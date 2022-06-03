let currentNumberWrapper = document.getElementById('currentNumber')
let currentNumber = 0

function increment(){
        currentNumber += 1
        if(currentNumber >= 0){
            currentNumberWrapper.innerHTML = currentNumber
            currentNumberWrapper.style.color = 'white'
        }
}

function decrement(){
    currentNumber -= 1
    if(currentNumber < 0){
        currentNumberWrapper.innerHTML = currentNumber
        currentNumberWrapper.style.color = 'red'
    }
}

