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
            console.log(displayText)
        }
         dis(displayText)
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
   
    if (operator == '+') displayText = add(num1, num2)
    else if (operator == '-') displayText = subtract(num1, num2)
    else if (operator == 'x')displayText = multiply(num1, num2)
    else if (operator == '/') displayText = divide(num1, num2)
    dis(displayText)
    console.log(displayText)
    return displayText
}
function clear(){
    displayText = ''
    console.log(displayText)
    dis(displayText)
    return displayText
}

function dis(val) { 
    document.getElementById("result").value = val 
}

//p.textContent += displayText