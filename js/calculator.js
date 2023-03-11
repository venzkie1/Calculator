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
  // array for opperands
    const operationChar = ["+","-","*","/","%"]
    for(let i = 0; i < textArray.length; i++) {
      // includes method is to search if the choosen array item is in the array list
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
        // remainder of divided two numbers
      case '%':
        computation = fistNumber % secondNumber;
        break
      default:
        return
    }
    return computation;
}

function equal(){
  // to make const text hold the inputted value
    const text=document.getElementById("input").value;
    // checking to see if I was able to get the value
    console.log('text', text);

    // To split the inputted value and make it into an array
    const splittedText = text.split("");
    // Checking to see the splitted value
    console.log('splittedText', splittedText);

    // To get the opperand from the array list from splittedText
    // 5 + 5 = operationIdx 1. 5 being the 0, + being the one and so on.
    const operationIdx = getOperation(splittedText);
    // Checking to see if I was able to get the value
    console.log('operationIdx', operationIdx);

    // To take the array item from the array list from operationIdx
    const operation = splittedText[operationIdx];
    // Checking if I was able to get the value
    console.log('operation', operation);

    // split method to create a sub array for inputted value in text and not including the operation
    // [value1, value2]
    const splittedNumber = text.split(`${operation}`);
    console.log('splittedNumber', splittedNumber);

    // Making the splitted numbers into a number
    //   [0]      [1]
    // [value1, value2]
    const firstNumber = parseFloat(splittedNumber[0]);
    const secondNumber = parseFloat(splittedNumber[1]);
    
    // Checking to see if I got the values of firstNumber, secondNumber and operation.
    console.log('firstNumber', firstNumber);
    console.log('operation',operation );
    console.log('secondNumber', secondNumber);

    // variable result to hold the result of computation
    // function compute is called to loop through different conditions in switch case.
    let result = compute(firstNumber, secondNumber, operation);

    // Checking the result
    console.log('result', result);

    // Display the output
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