/*
const fibonacci = function(num) {
    let a = 0, b = 1, c = 0;
    if (num<0) {
        return "OOPS";
    }
    if (num==1) { 
        return 1;
    }  
    if (num==2) { 
        return 1;
    }
    for (i = 2; i <= num; i++) {
        c = a + b
        a = b
        b = c
    }
    return c
};
*/
const fibonacci = function(num) {
    if (num < 0) {
        return "OOPS"
    }
    if (num == 1 || num == 2) {
        return 1;
    }

    return fibonacci(num-1) + fibonacci(num-2);
};
// Do not edit below this line
module.exports = fibonacci;
