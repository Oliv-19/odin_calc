let btns = document.querySelectorAll('.btn')
let displayText = ''
let ope = []

let num = ''
btns.forEach(btn => {
   
    btn.addEventListener('click', () =>{
        
        if(btn.textContent == '='){
            num = num.split(',')
            displayText = num.reduce((prev, val, i, arr) => {
                val = arr[i+ 1] 
                console.log(ope[i], prev, val)

                prev = operate(ope[i], prev, val)
                
                return prev
                
            }, num[0])
            console.log(num)

        } else if (btn.textContent == 'C'){
            clear()
        } else {
            
            displayText += btn.textContent; 

            
            if(btn.textContent == '+' ||btn.textContent == '-' ||btn.textContent == 'x' ||btn.textContent == '/' ){
                ope.push(btn.textContent)
                num += ','

            }else{
                num += btn.textContent; 
            }
            
            
            console.log(ope)
        }
         dis(displayText)
    })
});

function add(num1, num2){return Number(num1 )+ Number(num2)}
function subtract(num1, num2){return Number(num1 - num2)}
function multiply(num1, num2){return Number(num1 * num2)}
function divide(num1, num2){return Number(num1 / num2)}

function operate(operator, num1, num2){
    if (operator == '+') displayText = add(num1, num2)
    else if (operator == '-') displayText = subtract(num1, num2)
    else if (operator == 'x')displayText = multiply(num1, num2)
    else if (operator == '/') displayText = divide(num1, num2)
    dis(displayText)
    //console.log(displayText)
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