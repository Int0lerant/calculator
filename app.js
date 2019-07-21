// simple mathematical operations
add = (n1,n2) => {return n1+n2};
subtract = (n1,n2) => {return n1-n2};
multiply = (n1,n2) => {return n1*n2};
divide = (n1,n2) => {
    if(n2 === 0){
        alert("come on :-D");
        storeStartValue = null;
        storeSecondValue = null;
        operatorSelected = false;
        mathematicalOperationInput = null;
        changeCurrentOutput("");
        return 0;
    } else {
        return n1/n2;
    }
};

// operate function
operate = (n1,n2, mathematicalOperation) => {return mathematicalOperation(n1,n2);}

// initial variables 
const currentDisplayValue = document.getElementById("result");
let storeStartValue = null;
let storeSecondValue = null;
let operatorSelected = false;
let mathematicalOperationInput = null;
const allButtonsToInputNumber = document.querySelectorAll('.number');
const allCalcOperators = document.querySelectorAll('.operationmath');
const equalSign = document.getElementById('equals');
const delAll = document.getElementById('delall');

//change <p> with id="result"
function changeCurrentOutput(newOutput){
    currentDisplayValue.innerText = newOutput;
}

//Event Handling
function numberPress(e){
    if (operatorSelected===false && storeStartValue === null){
        storeStartValue = Number(e.target.innerText);
        changeCurrentOutput(storeStartValue);
    } else if(operatorSelected===false){
        storeStartValue = Number(storeStartValue.toString() + e.target.innerText);
        changeCurrentOutput(storeStartValue);
    } else if(operatorSelected===true){
        if (storeSecondValue === null){
            storeSecondValue = Number(e.target.innerText);
            changeCurrentOutput(storeSecondValue);
        } else if(true){
            storeSecondValue = Number(storeSecondValue.toString() + e.target.innerText);
            changeCurrentOutput(storeSecondValue);
        }
    }
    
}

function operatorPress(e){
    operatorSelected = true;
    switch(e.target.innerText){
        case '*':
            mathematicalOperationInput = multiply;
            break;
        case '/':
            mathematicalOperationInput = divide;
            break;
        case '+':
            mathematicalOperationInput = add;
            break;
        case '-':
            mathematicalOperationInput = subtract;
            break;
    }
}

function equalPress(e){
    if(!(storeStartValue===null)&&!(storeSecondValue===null)){
        storeStartValue = operate(storeStartValue,storeSecondValue,mathematicalOperationInput);
        storeSecondValue = null;
        changeCurrentOutput(storeStartValue);
    } else if(!(storeStartValue===null)){
        changeCurrentOutput(storeStartValue);
    } 
}

function acPress(e){
    storeStartValue = null;
    storeSecondValue = null;
    operatorSelected = false;
    mathematicalOperationInput = null;
    changeCurrentOutput("");
}

//applying Event Handlers
allButtonsToInputNumber.forEach(item => item.addEventListener('click', numberPress));
allCalcOperators.forEach(item => item.addEventListener('click', operatorPress));
equalSign.addEventListener('click',equalPress);
delAll.addEventListener('click', acPress);