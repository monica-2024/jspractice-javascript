//2/18/2025
console.log("hello, world!");
console.log("Monica Lee");
console.log(123);
console.log("hello", "world");
console.log("hello", "i am", 26);
//2/20/2025
// Primitive Data Types in JavaScript
//1.Strings: in quotes ""
//2.numbers: 1,2,3
//3.boolean: T or F
//4.undefied: something exists, not given value yet
//5.null: nothning, no value
//6.array: [1,2,3,]['a']
//7.object: {key, value} key, values in {}

//variables hold values
const myString = "this is a string";
console.log(myString);
const myNumber = 23;
console.log(myNumber);
const myBoolean = true;
console.log(myBoolean);
const myUndefined = undefined;
console.log(myUndefined);
const myNull = null;
console.log(null);
const myArray = [1, 2, 3, 4];
console.log(myArray);
const myObject = {
  firstName: "Monica",
  lastName: "Lee",
};
console.log(myObject);
//create a variable for a string
const greeting = "Hello, Baum Students!!";
console.log(greeting);
//create a variable for a number
const baumStudents = 35;
console.log(baumStudents);
//create a variable for an object, with keys 'name' and 'height'
const myProfile = {
  name: "Monica",
  height: 5.7,
};
console.log(myProfile);
//create an array that has a list of hobbies
const myHobbies = ["Coding", "QA", "Chilling"];
console.log(myHobbies);
//create an array of favorite movies
const favoriteMovies = ["Terminator", "Home Alone"];
console.log(favoriteMovies);

//var, var name = "monica", can change later, blocked scope, can be redefined global scope
//let, can me redfined, Similar to var
//const is constant, name = "Monica" can't never change
// let car = "BMW";
// console.log(car); //BMW
// let car = "Benz";
// console.log(car); //Benz
//% modul0: even or odd

//console log 2 addition problems
//console log 2 subtraction
// 2 multiplicationn problems
// 2 division
// 2 modulo
const one = 1;
const two = 2;
console.log(one + two);
const three = 45;
const four = 34354;
console.log(three + four);
const five = 98989;
const six = 8989898;
console.log(five - six);
const seven = 45;
const eight = 90;
console.log(seven * eight);

//index 0
const arr = ["bob", "pat", "mike", "sean"];
// print "sean"
console.log(arr[3]);
const obj = {
  make: "honda",
  model: "civic",
  year: 2002,
  mileage: 100000,
};

// print the mileage
console.log(obj.mileage);
const arrayOfObjects = [
  { name: "phil" },
  { name: "marco" },
  {
    name: "kaiser",
  },
  {
    name: "miran",
  },
];
// print 'kaiser'
console.log(arrayOfObjects[2].name);
