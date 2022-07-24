const add = function(num1, num2) {
	return (num1 + num2);
};

const subtract = function(num1, num2) {
	return (num1 - num2)
};

const sum = function(toBeSummed) {
  let summed = 0;
	toBeSummed.forEach((item) => {summed += item});
  return summed;
};

const multiply = function(toBeMultiplied) {
  let multiplied = 1;
  toBeMultiplied.forEach((item) => {multiplied *= item});
  return multiplied;
};

const power = function(number, power) {
	let result = 0;
  result = number ** power;
  return result;
};

// const factorial = function(number) {
//   if (number == 0 || number == 1) {
//     return 1;
//   }
//   let result = 1;
//   while (number != 1) {
//     result *= number;
//     number--;
//   }
//   return result
// };

const factorial = function(number) {
  if (number == 0 || number == 1) {
    return 1;
  }
  let result;
  result = number * factorial(number-1);
  return result
};
 /*
 factorial fxn
  if it is 0 || 1 return 1
  ok continue
  else u shall take the num multiply by num - 1 until it reaches 1
 */

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
