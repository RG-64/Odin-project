const findTheOldest = function(people) {
function age(a)
{
    if(a.yearOfDeath==undefined)
    {
        a.yearOfDeath=2025;
    }
    return a.yearOfDeath-a.yearOfBirth
}
people.sort((a,b)=>(age(b)-age(a)))
return people[0];

};

// Do not edit below this line
module.exports = findTheOldest;
