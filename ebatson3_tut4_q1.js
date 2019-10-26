let limitFunction = function (number) {
    return ((number > 20) && (number < 70));
};

let X = [134, 6, 7, 83, 9, 1, 0, 9, 6, 27, 54, 16]; // Only want elements between 5-20, accomplished using .filter() method
let limitValues = X.filter(limitFunction);
console.log("All of the elements in limitValues are: ");
console.log(limitValues);
//Coe below uses the arrow notation to filter through elements inside 5-20 range
let filteredValues = X.filter(number => ((number >= 5) && (number <= 20)));
console.log("All elements in filtered values: ");
console.log(filteredValues);

let transformToInches = function(number) {
    return number*39.37;
};
// The .map() method runs a callback on every array element
// Goal is to store transformed numbers in a second array, transformToInches uses only filtered values
let transformedToInches = limitValues.map(transformToInches);
console.log(transformedToInches);
console.log("\n");

let transformedToInches2 = limitValues.map(number => (number*39.37));
console.log("With arrow notation: ");
console.log(transformedToInches2);

// For a less than b, return a. Otherwise, return b
let findMinValue = function(a,b) {
    return (a<b)?a:b;
};

/* findMinValue will start by holding a as current value
it will compare it to the next value in the array if be is
less than a, the new current value will be b and it will
compare to the next element in the array */

// we will use the .reduce() to find the min amongst the numbers

let min = transformedToInches.reduce(findMinValue);
console.log(min);

let min2 = X.filter(number=>((number >= 5) && (number <= 20)))
    .map(number=>(number*39.37))
    .reduce((a,b)=> (a<b)?a:b);

console.log(min2);
