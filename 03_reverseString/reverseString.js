// const reverseString = function(string) {
//     const stringArray = string.split("");
//     const arrayLength = stringArray.length;
//     const reversedArray = [];
//     for (i = 0; i < arrayLength; i++) {
//         reversedArray.push(stringArray.pop())
//     }
//     const reversedWord = reversedArray.join("")
//     return reversedWord
// };


const reverseString = function(string) {
    return string.split('').reverse().join('');
};
/*
take in the string
split the string into an array
make another array
pop the last array item into new array
join the new array

*/

// Do not edit below this line
module.exports = reverseString;
