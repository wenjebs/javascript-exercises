const sumAll = function(firstNum, secondNum) {
    let sum = 0;
    if (firstNum < 0 || secondNum < 0 || !Number.isInteger(firstNum)|| !Number.isInteger(secondNum)) {
        return 'ERROR';
    }
    if (firstNum < secondNum) {
        for (let i = firstNum; i <= secondNum; i++) {
            sum += i
        }
        return sum;
    } else {
        for (let i = secondNum; i <= firstNum; i++) {
            sum += i
        }
        return sum;
    }
}
/*
compare the two numbres
if smaller use it as the  */
// Do not edit below this line
module.exports = sumAll;
