//3/22/25
// const array = [1, 2, 3, 4, 5];
// const newArray = [];

// array.forEach((num) => {
//   newArray.push(num);
// });
// console.log(newArray);

const array = [1, 2, 3, 4, 5];
const newArray = array.map((num) => {
  return num;
});
console.log(newArray);

//using mape with array, return a new array that takes
//each number and adds 10

const array1 = [1, 2, 3, 4, 5];
const newArray1 = array.map((num) => {
  return num + 10;
});
console.log(newArray1);

//create a function that uses a map with classmates,
//return an array of cities for where class id is 2

const numArr = [
  46, 39, 48, 21, 56, 82, 69, 92, 97, 51, 66, 69, 12, 6, 39, 8, 13, 1, 53, 31,
];
//   using .map() and return "<number> is Odd"
//    if number is Odd otherwise "<number> is Even"
//expected output => ["46 is Even", "39 is Odd", ...]
const result = numArr.map((num) => {
  if (num % 2 === 0) {
    return "num is " + num + " Even"; // Concatenate "Even" for even numbers
  }
  return "num is " + num + " Odd"; // Concatenate "Odd" for odd numbers
});

console.log(result);

const even = [1, 2, 3].filter((num) => {
  return num % 2 === 0;
});
console.log(even);
