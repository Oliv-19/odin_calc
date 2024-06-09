let operator 
let num1 
let num2 

let display = document.querySelectorAll('.display')
let p = document.querySelectorAll('.p')
let btns = document.querySelectorAll('.btn')
let displayText = ''
let ope 
let operators = ['+', '-', 'x', '/']
btns.forEach(btn => {
   
    btn.addEventListener('click', () =>{
        if(btn.textContent == '='){
            operators.forEach(op => {
                if (displayText.includes(op)){
                    displayText = displayText.split(op)
                    ope = op
                } else {
                    displayText = displayText
                }
            })
            operate(ope, displayText[0], displayText[1])

        } else if (btn.textContent == 'C'){
            clear()
        } else {
            displayText += btn.textContent; 

        }
        
    })
});

function add(num1, num2){
    return Number(num1 )+ Number(num2)
}
function subtract(num1, num2){
    return Number(num1 - num2)
}
function multiply(num1, num2){
    return Number(num1 * num2)
}
function divide(num1, num2){
    return Number(num1 / num2)
}

function operate(operator, num1, num2){
    console.log(operator, num1, num2)
    let result
    if (operator == '+') result = add(num1, num2)
    else if (operator == '-') result = subtract(num1, num2)
    else if (operator == 'x')result = multiply(num1, num2)
    else if (operator == '/') result = divide(num1, num2)

    console.log(result)
}
function clear(){
    displayText = ''
    console.log(displayText)
}