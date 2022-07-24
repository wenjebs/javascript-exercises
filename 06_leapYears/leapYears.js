const leapYears = function(year) {
    if (year % 400 == 0) {
        return true;
    }
    if (year % 4 == 0 && year %100 != 0) {
        return true;
    } else {
        return false;
    }
};
/*so lets try to test for leap year
conditions are 
DIVISIBLE BY 400
DIVISIBLE BY 4 (% 4 == 0) AND NOT DIVISIBLE BY (100) 

 */
// Do not edit below this line
module.exports = leapYears;
