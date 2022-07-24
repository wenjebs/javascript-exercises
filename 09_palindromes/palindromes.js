const palindromes = function (string) {
    let reverseString;
    let formattedString;
    // remove punctuation and spaces
    formattedString = string.replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").replace(/ /g,''); // OR [^a-z] (remove all except letters in a-z)
    // reverse formatted string
    reverseString = formattedString.split('').reverse().join('');
    //compare the reversed to the og
    if (formattedString.toLowerCase() == reverseString.toLowerCase()) {
        return true
    }
    return false
};
/*
to check palindrome first
i need to remove all punctuations and word breaks
then reverse the string 
*/
// Do not edit below this line
module.exports = palindromes;
