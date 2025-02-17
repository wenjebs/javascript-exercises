const findTheOldest = function(people) {
    // get the year
    let currentYear = (new Date()).getFullYear();

    // calculate ages and put in array
    let ages = people.map(function(person) {
        // check if the person still living, if he is get his age
        if (!person.yearOfDeath) {
            return currentYear - person.yearOfBirth;
        }
        return person.yearOfDeath - person.yearOfBirth;
    });

    // sort ages and get oldest guy
    ages.sort()
    let oldestAge = ages[ages.length-1];

    // find the person with oldest age  and return
    let findPerson = people.find(person => {
        // if still alive, get the age and check with oldest age
        if (!person.yearOfDeath) {
            let stillAliveAge = currentYear - person.yearOfBirth;
            return stillAliveAge == oldestAge;
        }
        // else just check the age and check with oldest age
        let age = person.yearOfDeath - person.yearOfBirth;
        return age == oldestAge;
    });

    console.log(ages)
    console.log(oldestAge)
    return findPerson;
    // need to find the age of the still alive then check.
};
/*
for each object in array
yeardeath - year brth to find age
then to get the oldest one use if else n storing oif values
then use find
 */
// Do not edit below this line
module.exports = findTheOldest;
