function clk(val)
{
    document.getElementById(`input`).value=document.getElementById(`input`).value+val;
}

function clrdisp()
{
    document.getElementById(`input`).value = ""
    document.getElementById(`output`).value = ""
}

function getOperation(textArray) {
    const operationChar = ["+","-","*","/","%"]
    for(let i = 0; i < textArray.length; i++) {
        if (operationChar.includes(textArray[i])) {
            return i;
        }
    }
}

function compute(fistNumber, secondNumber, operation) {
    let computation = 0;
    if (isNaN(fistNumber) || isNaN(secondNumber)) return
    switch (operation) {
      case '+':
        computation = fistNumber + secondNumber;
        break
      case '-':
        computation = fistNumber - secondNumber;
        break
      case '*':
        computation = fistNumber * secondNumber;
        break
      case '/':
        computation = fistNumber / secondNumber;
        break
        case '%':
        computation = fistNumber / secondNumber;
        break
      default:
        return
    }
    return computation;
}

function equal(){
    const text=document.getElementById("input").value;
    console.log('text', text);
    const splittedText = text.split("");
    console.log('splittedText', splittedText);
    const operationIdx = getOperation(splittedText);
    console.log('operationIdx', operationIdx);
    const operation = splittedText[operationIdx];
    console.log('operation', operation);
    const splittedNumber = text.split(`${operation}`);
    const firstNumber = parseFloat(splittedNumber[0]);
    const secondNumber = parseFloat(splittedNumber[1]);
    
    console.log('firstNumber', firstNumber);
    console.log('operation',operation );
    console.log('secondNumber', secondNumber);
    let result = compute(firstNumber, secondNumber, operation);
    console.log('result', result);
    document.getElementById("output").value=result;

}

let myCalculator = document.getElementById(`calculator`);
myCalculator.style.display = `none`;
function displayCalculator()
{
    if(myCalculator.style.display ===`none`)
    {
        myCalculator.style.display = `block`;
    }
    else{
        myCalculator.style.display = "none"
    }
}

let calc = document.getElementById(`calculator`);
let button = document.getElementById(`overBut`);
calc.style.display = `none`;

function displayCalculator() {
  if (calc.style.display === `none`) {
    calc.style.display = `flex`;
    button.textContent = "Hide Calculator";
  } 
  else {
    calc.style.display = `none`;
    button.textContent = "Use Calculator";
  }
}
// let a;
// function displayCalculator()
// {
//     if (a==1)
//     {
//         document.getElementById("calculator").style.display="inline";
//         return a=0;
//     }
//     else
//     {
//         document.getElementById("calculator").style.display="none";
//         return a=1;
//     }
// }