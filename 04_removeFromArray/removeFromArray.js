// const removeFromArray = function(array, ...args) {
//     const updatedArray = [];
//     for (const i of array) {
//         if (!args.includes(i)) {
//             updatedArray.push(i);
//         }
//     }
//     return updatedArray;
// };

var removeFromArray = function(...args) {
  const array = args[0]
  return array.filter(val => !args.includes(val))
}
/*
remove stuff from array
itirate througgh old array
if stuff inside array not equall to stuf to be rmeoved 
add to new array
return new array
*/
// Do not edit below this line
module.exports = removeFromArray;
