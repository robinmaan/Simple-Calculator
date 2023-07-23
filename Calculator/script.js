
function appendNumber(number) {
    document.getElementById("expression").value += number;
  }
  

  function appendOperator(operator) {
    var expression = document.getElementById("expression").value;
  
    // Check if the last character is already an operator
    var lastCharacter = expression[expression.length - 1];
    if (lastCharacter === '+' || lastCharacter === '-' || lastCharacter === '*' || lastCharacter === '/') {
      // Replace the last operator with the new operator
      expression = expression.slice(0, -1);
    }
  
    document.getElementById("expression").value = expression + operator;
  }
  
  function calculate() {
    var expression = document.getElementById("expression").value;
  
    try {
      var result = eval(expression);
      document.getElementById("expression").value = result;
    } catch (error) {
      document.getElementById("expression").value = "Error";
    }
  }
  
  
  function clearExpression() {
    document.getElementById("expression").value = "";
  }