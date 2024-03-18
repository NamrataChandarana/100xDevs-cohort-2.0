function sum(num1, num2, func) {
  const result = num1 + num2;
  func(result);
}

function displayResult(data) {
  console.log("Result of the sum is : " + data);
}
function displayResultPassive(data) {
  console.log(" sum's result is : " + data);
}

//You are only allowed to call one function after this
//how will you displayResult of a sum

const ans = sum(1, 2, displayResult); //callback funcion
console.log( sum(1, 2, displayResult));