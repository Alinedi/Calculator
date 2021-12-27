$(document).ready(function () {
  //Theme Switch code

  $("#first").click(function () {
    let theme = $("body");
    if (theme.hasClass("theme-2")) {
      theme.removeClass("theme-2");
    } else if (theme.hasClass("theme-3")) {
      theme.removeClass("theme-3");
    }
  });

  $("#second").click(function () {
    let theme = $("body");
    if (theme.hasClass("theme-3")) {
      theme.removeClass("theme-3");
      theme.addClass("theme-2");
    }
    theme.addClass("theme-2");
  });

  $("#third").click(function () {
    let theme = $("body");
    if (theme.hasClass("theme-2")) {
      theme.removeClass("theme-2");
      theme.addClass("theme-3");
    }
    theme.addClass("theme-3");
  });



const calculator={
  displayValue:'0',
  firstEnteredValue:null,
  secondValue:false,
  operator:null,
};
var collectButtons = document.querySelectorAll('.grid-item');
for (var i = 0; i < collectButtons.length; i++) {
document.querySelectorAll('.grid-item')[i].addEventListener('click', function() {
  const value = this.innerHTML;
  switch(value){
    case '+':
    case '-':
    case 'x':
    case '/':
    case '=':
      applyOperator(value);
      break;
      case '.':
        handleDecimal(value);
        break;
        case 'RESET':
          clearValues();
          break;
          case 'DEL':
            clearValues();
            break;
          default:
          if(Number.isInteger(parseFloat(value))){
            displayDigit(value);
          }
  }
  updateDisplayValue();
});
}

function displayDigit(value){
  const {displayValue,secondValue}=calculator; // deconstructed the calculator object
  if(calculator.secondValue===true){
      calculator.displayValue = value;
      calculator.secondValue=false;
  }else{
    calculator.displayValue = displayValue === '0' ? value : displayValue + value;
  }
}

function applyOperator(operatorValue){
  const{displayValue,operator,firstEnteredValue}=calculator;
  calculator.operator=operatorValue;
  if (operator && calculator.secondValue)  {
    calculator.operator = operatorValue;
    return;
  }
  if (firstEnteredValue == null && !isNaN(parseFloat(displayValue))) {
    calculator.firstEnteredValue = parseFloat(displayValue);
  } else if (operator) {
    const result = calculate(firstEnteredValue, parseFloat(displayValue), operator);
    const finalResult=parseFloat(result.toFixed(2));
    calculator.displayValue = finalResult.toLocaleString();
    calculator.firstEnteredValue = result;
  }

  calculator.secondValue = true;
  calculator.operator = operatorValue;
}

function calculate(input1, input2, operator) {
  if (operator === '+') {
    return input1 + input2;
  } else if (operator === '-') {
    return input1 - input2;
  } else if (operator === 'x') {
    return input1 * input2;
  } else if (operator === '/') {
    return input1 / input2;
  }

  return input2;
}
function handleDecimal(dot) {
  if (calculator.secondValue === true) {
  	calculator.displayValue = "0."
    calculator.waitingForSecondOperand = false;
    return
  }

  if (!calculator.displayValue.includes(dot)) {
    calculator.displayValue += dot;
  }
}
function clearValues() {
  calculator.displayValue = '0';
  calculator.firstEnteredValue = null;
  calculator.secondValue = false;
  calculator.operator = null;
}
function updateDisplayValue(){
  document.querySelector('.digitBox').innerHTML=calculator.displayValue;
}
updateDisplayValue();
});
