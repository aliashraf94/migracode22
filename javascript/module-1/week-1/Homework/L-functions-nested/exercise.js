var mentor1 = "Daniel";
var mentor2 = "Irina";
var mentor3 = "Mimi";
var mentor4 = "Rob";
var mentor5 = "Yohannes";


function nameToUppercase (name) {
    return name.toUpperCase()
}

function shoutyGreeting (name) {
    const upperCaseName = nameToUppercase(name)
    return `HELLO ${upperCaseName}`
}

console.log(shoutyGreeting(mentor1));
console.log(shoutyGreeting(mentor2));
console.log(shoutyGreeting(mentor3));
console.log(shoutyGreeting(mentor4));
console.log(shoutyGreeting(mentor5));