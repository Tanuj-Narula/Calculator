const expression = document.querySelector("#expression");
const result = document.querySelector("#result");
const clearBtn = document.querySelector("#clear");
const deleteBtn = document.querySelector("#Delete");
const keys = document.querySelectorAll(".keys");

let currExpression = "";

keys.forEach((key)=>{
    key.addEventListener("click", (e)=>{
        if(e.target.innerText !== '='){
            currExpression=  currExpression + e.target.innerText;
            expression.innerText = currExpression;
        }
        else{
            operate(expression.innerText);
        }
    })
})

clearBtn.addEventListener("click",()=>{
    expression.innerText = " ";   
    currExpression = " ";
    result.innerText = " ";
})

deleteBtn.addEventListener("click",()=>{
    let newExpression = expression.innerText.slice(0, -1);
    currExpression = newExpression;
    expression.innerText = newExpression;
})

function operate(exp){
    let answer;
    if(exp.includes("÷") || exp.includes("×")){
        exp = exp.replaceAll("÷", "/");
        exp = exp.replaceAll("×", "*");
    }
    answer = math.evaluate(exp);
    result.innerText = answer;
}


