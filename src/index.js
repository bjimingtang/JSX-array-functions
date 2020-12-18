var numbers = [3, 56, 2, 48, 5];

//Map -Create a new array by doing something with each item in an array.
function double(x) {
  return x * 2;
}

const newNumbers = numbers.map(double);
console.log(newNumbers);

//Filter - Create a new array by keeping the items that return true.
const filteredNumbers = numbers.filter(function (x) {
  return x < 10;
});
console.log(filteredNumbers);

//Reduce - Accumulate a value by doing something to each item in an array.
const reducedNumbers = numbers.reduce(function (accumulator, currentNumber) {
  console.log(currentNumber);
  console.log(accumulator);
  return accumulator + currentNumber;
});
console.log(reducedNumbers);

//Find - find the first item that matches from an array.
const foundNumber = numbers.find(function (num) {
  return num > 10;
});
console.log(foundNumber);

//FindIndex - find the index of the first item that matches.
const foundIndex = numbers.findIndex(function (num) {
  return num > 10;
});
console.log(foundIndex);
