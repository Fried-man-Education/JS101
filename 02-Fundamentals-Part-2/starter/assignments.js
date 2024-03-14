// Functions
/*
1. Write a function called describeCountry which takes 
three parameters: country, population and capitalCity. 
Based on this input, the function returns a string with 
this format: 'Finland has 6 million people and its 
capital city is Helsinki'.
2. Call this function 3 times, with input data for 3 
different countries. Store the returned values in 3 
different variables, and log them to the console.
*/
function describeCountry(country, population, capitalCity) {
    return `${country} has ${population} million people and its capital city is ${capitalCity}`
}

const usa = describeCountry(
    "USA",
    333,
    "Washington"
);
const brazil = describeCountry(
    "Brazil",
    100,
    "La Paz"
);
const uk = describeCountry(
    "UK",
    80,
    "London"
);
// console.log(usa, brazil, uk);

// Function Declarations vs. Expressions
/*
1. The world population is 7900 million people. Create 
a function declaration called percentageOfWorld1 which 
receives a population value, and returns the percentage 
of the world population that the given population represents. 
For example, China has 1441 million people, so it's about 
18.2% of the world population.
2. To calculate the percentage, divide the given population 
value by 7900 and then multiply by 100.
3. Call percentageOfWorld1 for 3 populations of countries of 
your choice, store the results into variables, and log them 
to the console.
4. Create a function expression which does the exact same 
thing, called percentageOfWolrd2, and also call it with 3 
country populations (can be the same populations).
*/
function percentageOfWorld1 (population) {
    return population / 7900 * 100;
}

let usaPerc = percentageOfWorld1(333);
let brazilPerc = percentageOfWorld1(100);
let ukPerc = percentageOfWorld1(80);
// console.log(usaPerc, brazilPerc, ukPerc);

let percentageOfWorld2 = function (population) {
    return population / 7900 * 100;
};
usaPerc = percentageOfWorld2(333);
brazilPerc = percentageOfWorld2(100);
ukPerc = percentageOfWorld2(80);
// console.log(usaPerc, brazilPerc, ukPerc);

// Arrow Functions
/*
1. Recreate the last assignment, but this time 
create an arrow function called percentageOfWorld3.
*/
const percentageOfWorld3 = population => population / 7900 * 100;
usaPerc = percentageOfWorld3(333);
brazilPerc = percentageOfWorld3(100);
ukPerc = percentageOfWorld3(80);
// console.log(usaPerc, brazilPerc, ukPerc);

// Functions Calling Other Functions
/*
1. Create a function called describePopulation. Use the 
function type you like the most. This function takes in 
two arguments: country and population, and returns a strings 
like this: 'China has 1441 million people, which is about 
18.2% of the world'.
2. To calculate the percentage, describePopulation calls the 
percentageOfWorld1 you created earlier.
3. Call describePopulation with data for 3 countries of 
your choice.
*/
const describePopulation = (country, population) => 
`${country} has ${population} million people, which is about ${percentageOfWorld1(population)}% of the world`;

console.log(describePopulation("USA", 333));
console.log(describePopulation("Brazil", 100));
console.log(describePopulation("UK", 80));