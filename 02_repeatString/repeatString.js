const repeatString = function(string, num) {
    let repeatedString = '';
    if (num < 0) {
        return 'ERROR'
    } else {
        for (let i = 0; i < num; i++) {
            repeatedString += string;
        }
    }

    return repeatedString;
};
/*
take string input
start for loop using num
for each loop add string to a new variable repated string

*/
// Do not edit below this line
module.exports = repeatString;
