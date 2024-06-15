let btns = document.querySelectorAll('.btn')
let del = document.querySelector('.del')
let body = document.querySelector('body')
let displayText = ''
let ope = []
let point = document.querySelector('.point')
let num = ''

const Numbers = [1,2,3,4,5,6,7,8,9,0]
const Operators = ['+','-','/', '*', 'x']


function delLast(){
    lastD = displayText.substring(displayText.length -1)
    displayText = displayText.slice(0, -1)

    if(lastD== '+' || lastD== '-' || lastD == 'x' || lastD== '/' ){ 
        ope.pop() 
    }else{
        num = num.slice(0, -1)
    }
}

function checkBtn(char){
        if (char == '⌦' || char == 'Backspace'){
            delLast()
        }else if(char == '=' ||char == 'Enter'){
            num = num.split(',')
            
            displayText = num.filter(function(e){return e}).reduce((prev, val, i, arr) => {
                val = arr[i+ 1] 
                console.log(ope[i], prev, val)
                prev = operate(ope[i], prev, val)
                return prev
            }, num[0])
            
            point.disabled = false

        } else if (char == 'C' || char == 'Delete'){
            clear()
            point.disabled = false
        }else {
            if (Numbers.includes(parseInt(char)) || Operators.includes(char)) {
                char = char == '*' ? 'x': char
                displayText += char; 

                if (char == '.'){
                    point.disabled = true
                    num += '.'
                } else if(char == '+' ||char == '-' ||char == 'x' ||char == '/' ){
                    ope.push(char)
                    num += ','
                    point.disabled = false
                } else{
                    num += char; 
                }
            }
        }

         dis(displayText)
}

btns.forEach(btn => {
    btn.addEventListener('click', () =>{
        checkBtn(btn.textContent)
    })
});
body.addEventListener('keydown', (e) =>{
    checkBtn(e.key)
})

function add(num1, num2){return Number(num1 )+ Number(num2)}
function subtract(num1, num2){return Number(num1 - num2)}
function multiply(num1, num2){return Number(num1 * num2)}
function divide(num1, num2){return Number(num1 / num2)}

function operate(operator, num1, num2){
    if (operator == '+') displayText = add(num1, num2)
    else if (operator == '-') displayText = subtract(num1, num2)
    else if (operator == 'x' || operator == '*') displayText = multiply(num1, num2)
    else if (operator == '/') displayText = divide(num1, num2)
    dis(displayText)

    return displayText
}
function clear(){
    displayText = ''
    ope = []
    num = ''
    dis(displayText)
    return displayText
}

function dis(val) { 
    document.getElementById("result").value = val 
}