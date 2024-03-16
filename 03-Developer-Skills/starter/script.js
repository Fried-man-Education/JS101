// Remember, we're gonna use strict mode in all scripts now!
"use strict";

function printForecast(arr) {
  let output = "";
  for (let i = 0; i < arr.length; i++) {
    output += `${arr[i]} in ${i + 1} days ... `;
  }
  return output;
}

console.log(printForecast([17, 21, 23]));
console.log(printForecast([12, 5, -5, 0, 4]));
