const now = new Date();
let deathYear ;
let age;
let oldestAge;
const findTheOldest = function(people) {
    let oldest = people[0];
    people.forEach((person)=> {
        deathYear = person.yearOfDeath || now.getFullYear();

        age = deathYear - person.yearOfBirth; 
        oldestAge = (oldest.yearOfDeath || now.getFullYear()) - oldest.yearOfBirth;
        if(age > oldestAge)
            oldest = person;
    });
    return oldest;
        
};

// Do not edit below this line
module.exports = findTheOldest;
