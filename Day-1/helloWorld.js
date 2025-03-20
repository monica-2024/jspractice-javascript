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
console.log(arrayOfObjects[2].name); //kaiser

//2/22/2025
const arrayOfObjects1 = [
  { name: "phil", age: 23 },
  { name: "marco", age: 20 },
  {
    name: "kaiser",
    age: 16,
  },
  {
    name: "miran",
    age: 23,
  },
];
// print phil's age
console.log(arrayOfObjects1[0].age); // output 23
console.log(arrayOfObjects1[2].name); //output kaiser

const arrayOfObjects2 = [
  { name: "phil", hobbies: ["coding", "cycling", "singing"], age: 23 },
  { name: "marco", hobbies: ["coding", "cycling", "playing game"], age: 20 },
  {
    name: "kaiser",
    hobbies: ["coding", "playing gaming", "music"],
    age: 16,
  },
  {
    name: "miran",
    hobbies: ["coding", "running"],
    age: 23,
  },
];
// print miran's hobbies
console.log(arrayOfObjects2[3].hobbies); //[ 'coding', 'running' ]
// print phil's first element of hobbies
console.log(arrayOfObjects2[0].hobbies[0]); //coding
// print marco's second element of hobbies

// print kaiser's last element of hobbies
// print miran's last element of hobbies

//Oprator signs
//&& and or || ,  equals operator A === B true  value or data types
// !== not equal >= <=, < >

//if name === "marco"; then change name to 'kaiser'

let firstName = "marco";
if (firstName === "marco") {
  // === comparison

  //this is the code that runs
  //when the if condition is true
  firstName = "kaiser"; // = assigning to value
}
console.log("firstName", firstName); //kaiser

if (firstName === "kaiser") {
  firstName = "miran";
}
console.log("firstName", firstName); //miran

let score = 57;
//if the score is less than 80
//print "I need some help!"
if (score > 80) {
  console.log("I am doing great help!"); //I need some help!
} else {
  console.log("i need help");
}

let lunch = "sandwich";

//if lunch is 'noodles'
if (lunch === "noodles") {
  console.log("i have noodles for lunch!");
} else {
  console.log("i do not like my lunch"); //I do not like my lunch
}
//print, ' i have noodles for lunch!'
//else, ' i do not like my  lunch!'

let number = 14;
// if number is even
if (number % 2 === 1) {
  console.log("i am even!");
} else {
  console.log("i am odd");
}
//print ' i am even!'

const arrayOfObjects3 = [
  { name: "phil", age: 40 },
  { name: "marco", age: 20 },
  {
    name: "kaiser",
    age: 16,
  },
  {
    name: "miran",
    age: 23,
  },
];
// if phil's age is less than 30 OR miran's age is greater than 20
if (arrayOfObjects3[0].age < 30 || arrayOfObjects3[3].age > 20) {
  console.log(arrayOfObjects3[0].name);
  console.log(arrayOfObjects3[3].name);
}

// print phil and miran's name

//if marco's age is less than 30 and kaiser's age is greater than 20
const marcoStudent = arrayOfObjects3[1];
const kaiserStudent = arrayOfObjects3[2];
if (marcoStudent.age < 30 && kaiserStudent > 20) {
  console.log(marcoStudent.name, kaiserStudent.name);
} else {
  console.log("either marco is older than 30 or kaiser is younger than 20");
}
//print marco and kaiser's name
//else print 'either marco is older than 30 or kaiser is younger than 20'

//2/25/2025
const foods = [
  {
    name: "hotdog",
    categories: ["meat", "fast food", "quick eats"],
    price: 100,
  },
  {
    name: "cheeseburger",
    categories: ["meat", "fast food", "quick eats"],
    price: 300,
  },
  {
    name: "french fries",
    categories: ["vegetarian", "fast food", "quick eats"],
    price: 100,
  },
  {
    name: "cola",
    categories: ["drink", "soda", "quick eats"],
    price: 100,
  },
];

// problem 1:  print the 2nd category for french fries
console.log(foods[2].categories[1]); //fast food
// problem 2:  print the price for cola.  price is in cents
console.log(foods[3].price); //100
// problem 3:  Print "A cheeseburger is $3"
console.log("A", foods[1].name, "is", "$" + foods[1].price / 100); //"A cheeseburger is $3"
// hint: foods is an array so use the correct index to find the object you want to work with
//2/27/2025
const drinkItem = "cola";
if (foods[drinkItem] === "cola") {
  console.log("Cola is in the menu.");
} else {
  console.log("Cola is not available");
}

const foodPrice = foods[0];
if (foodPrice.price > 150) {
  console.log("This", foodPrice.name, "is an expensive item");
} else {
  console.log("This", foodPrice.name, "is a cheap item");
}
