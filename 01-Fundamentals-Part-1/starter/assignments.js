// Values and Variables
/*
1. Declare variables called country, continent 
and population and assign their values according 
to your own country (population in millions).
2. Log their values to the console.
*/
const country = "United States of America";
const continent = "North America";
let population = 331.9;
/*console.log(
    "Country: " + country + 
    "\nContinent: " + continent + 
    "\nPopulation: " + population
);*/

// Data Types
/*
1. Declare a variable called isIsland and set
its value according to your country. The variable 
should hold a Boolean value. Also declare a variable 
language, but don't assign it any value yet.
2. Log the types of isIsland, population, country 
and language to the console.
*/
const isIsland = false
let language;
/*console.log(
    "isIsland type: " + (typeof isIsland) +
    "\nPopulation type: " + (typeof population) +
    "\nCountry type: " + (typeof country) + 
    "\nLanguage type: " + (typeof language) 
);*/

// let, const and var
/*
1. Set the value of language to the language spoken 
where you live (some countries have multiple languages, 
but just choose one).
2. Think about which variables should be const variables 
(which values will never change, and which might change?). 
Then, change these variables to const.
3. Try to change one of the changed variables now, 
and observe what happens.
*/
language = "English";
/*console.log(
    "isIsland type: " + (typeof isIsland) +
    "\nPopulation type: " + (typeof population) +
    "\nCountry type: " + (typeof country) + 
    "\nLanguage type: " + (typeof language) 
);*/

// Basic Operators
/*
1. If your country split in half, and each half would 
contain half the population, then how many people 
would live in each half?
2. Increase the population of your country by 1 and 
log the result to the console.
3. Finland has a population of 6 million. Does your 
country have more people than Finland?
4. The average population of a country is 33 million 
people. Does you country have less people than 
the average country?
5. Based on the variables you created, create a new 
variable description which contains a string with this 
format: 'Portugal is in Europe, and its 11 million 
people speak portuguese'.
*/
/*
console.log("Half population: " + (population / 2));
population++;
console.log("Population: " + population);
console.log("Is Finland more populated: " + (population < 6));
console.log("Is average more populated: " + (population < 33));
const description = country + " is in " + continent +
    ", and its " + population + " million people speak " + language;
console.log(description);
*/

// Strings and Template Literals
/*
Recreate the description variable from the last assignment,
this time using the template literal syntax.
*/
const description = `${country} is in ${continent}, and its ${population} million perople speak ${language}`;
// console.log(description);

// Taking Decisions: if / else Statements
/*
1. If your country's population is greater than 33 million,
log a string like this to the console: "Portugal's population
is 22 million below average" (the 22 is the average of 33 minus
the country's population).
2. After checking the result, change the population temporarily 
to 13 and then to 130. See the different results, and set the 
population back to original.
*/
if (population > 33) {
    //console.log(`${country}'s population is above average`);
} else {
    console.log(
        `${country}'s population is ${33 - population} million
        below average`
    );
}

// Type Conversion and Coercion
/*
Predict the result of these 5 operations without executing them
*/
/*
console.log('9' - '5'); // -> 4 (number)
console.log('19' - '13' + '17'); // -> "617" (string)
console.log('19' - '13' + 17); // -> 23 (number)
console.log('123' < 57); // -> false (bool)
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> 1143 (number)
*/

// Equality Operators: == vs. ===
/*
1. Declare a variable numNeighbours based on a prompt()
2. If there is only 1 neighbour, log to the console 'Only 
1 border!' (use loose equality == for now).
3. Use an else-if block to log 'More than 1 border' in case
numNeighbours is greater than 1.
4. Use an else block to log 'No borders' (this block will be
executed when numNeighbours is 0 or any other value).
5. Test the code with different values of numNeighbours,
including 1 and 0.
6. Change == to ===, and test the code again, with the same
values of numNeighbours. Notice what happens when there is 
exactly 1 border! Why is this happening?
7. Finally, convert numNeighbours to a number, and watch 
what happens now when you input 1.
8. Reflect on why we should use the === operator and type
conversion in this situation.
*/
const numNeighbours = Number(
    prompt('How many neighbour countries does your contry have?')
);
if (numNeighbours === 1) {
    console.log("Only 1 border");
} else if (numNeighbours > 1) {
    console.log("More than 1 border");
} else {
    console.log("No border");
}