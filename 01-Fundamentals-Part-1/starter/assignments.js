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
console.log(
    "isIsland type: " + (typeof isIsland) +
    "\nPopulation type: " + (typeof population) +
    "\nCountry type: " + (typeof country) + 
    "\nLanguage type: " + (typeof language) 
);