let btns = document.querySelectorAll('.btn')
let del = document.querySelector('.del')
let displayText = ''
let ope = []
let point = ''
let num = ''


function delLast(){
    lastD = displayText.substring(displayText.length -1)
    displayText = displayText.slice(0, -1)

    if(lastD== '+' || lastD== '-' || lastD == 'x' || lastD== '/' ){ 
        ope.pop() 
    }else{
        num = num.slice(0, -1)
    }
}



btns.forEach(btn => {
   
    btn.addEventListener('click', () =>{
        
        if (btn.textContent == '⌦'){
            
            delLast()
           
        
        }else if(btn.textContent == '='){
            num = num.split(',')
            num = num.filter(function(e){return e}); 
            displayText = num.reduce((prev, val, i, arr) => {
                val = arr[i+ 1] 
                console.log(ope[i], prev, val)

                prev = operate(ope[i], prev, val)
                
                return prev
                
            }, num[0])
            console.log(num)
            point.disabled = false

        } else if (btn.textContent == 'C'){
            clear()
            point.disabled = false
        
        }  else {
            
            displayText += btn.textContent; 

            if (btn.textContent == '.'){
                point = btn
                point.disabled = true
                num += '.'
            
            } else if(btn.textContent == '+' ||btn.textContent == '-' ||btn.textContent == 'x' ||btn.textContent == '/' ){
                ope.push(btn.textContent)
                num += ','
                point.disabled = false

            } else{
                num += btn.textContent; 
            }
            
            
            console.log(ope)
            console.log(num)
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