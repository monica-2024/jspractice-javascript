//2/27/2025

// const foods = ["fries", "coke", "burger"]; //an array is a list of things
// foods.length; //3

//while loop
//while some condition is true, keep running the program
// let index = 0;

// while (index < foods.length) {
//   console.log(foods[index]);
//   index = index + 1;
//   //index++
// }
// while (index < foods.length) {
//   console.log("index", index);
//   console.log("the food is", foods[index]);
//   index = index + 1;
//   //index++
// }

const cars = [
  "bmw",
  "tesla",
  "lexus",
  "honda",
  "land rover",
  "hummer",
  "ford",
  "acura",
  "porsche",
  "ferarri",
  "lambo",
];

// create a while look and print out all the cars
let carIndex = 0;
while (carIndex < cars.length) {
  console.log(cars[carIndex]);

  carIndex++;
}
//only print "bmw"

// let carIndex1 = 0;
// while (carIndex1 < cars.length) {
//   if (cars[carIndex1] === "bmw");
//   {
//     console.log("found bmw!");
//     break;
//   }
//   carIndex1++;
// }

// let num = 1;
// while (num <= 5) {
//   console.log(num);
//   num++;
// }
// //1,2,3,4,5

// let count = 5;
// while (count >= 1) {
//   console.log(count);
//   count--;
// }
// //5,4,3,2,1

const arr = [];
for (let i = 0; i < arr.length; i++) {
  //run code here when 'i' is less than 'arr.length'

  //'i' is being used as 'index' of 'arr'
  console.log(arr[i]);
}
//last index arr.length-1 will give out the last arr.

//3/1/2025
//use for loop to print numbers from 1 to 10
const ten = 10;
for (let i = 1; i <= ten; i++) {
  console.log(i);
}
//use a for loop to print even numbers from 2 to 20
const twentyEven = 20;
for (let i = 2; i <= twentyEven; i++) {
  if (i % 2 === 0) console.log(i);
}
//reverse count 10 to 1
const start = 10;
const end = 1;
for (let i = start; i >= end; i--) {
  console.log(i);
}
//even or odd
const twelve = 0;
for (let i = 1; i <= twelve; i++) {
  if (i % 2 === 0) {
    console.log(i, "it is even number");
  } else {
    console.log(i, "it is odd number");
  }
}
//a count variable to keep track of the count
//type{number}
let count1 = 0;
for (let i = 1; i <= 20; i++) {
  if (i % 2 === 0) {
    //count = count +1;
    //count = 0+1
    count1++;
  }
}
console.log(count1); // output: 10

const myGarage = [
  { brand: "Toyota", model: "Corolla", year: 2022 },
  { brand: "Honda", model: "Civic", year: 2021 },
  { brand: "Ford", model: "Mustang", year: 2020 },
  { brand: "Chevrolet", model: "Camaro", year: 2019 },
  { brand: "BMW", model: "X5", year: 2023 },
  { brand: "Mercedes-Benz", model: "C-Class", year: 2022 },
  { brand: "Audi", model: "A4", year: 2021 },
  { brand: "Tesla", model: "Model 3", year: 2023 },
  { brand: "Nissan", model: "Altima", year: 2020 },
  { brand: "Hyundai", model: "Sonata", year: 2021 },
  { brand: "Kia", model: "Sorento", year: 2022 },
  { brand: "Volkswagen", model: "Passat", year: 2019 },
  { brand: "Mazda", model: "CX-5", year: 2023 },
  { brand: "Subaru", model: "Outback", year: 2021 },
  { brand: "Lexus", model: "RX 350", year: 2022 },
  { brand: "Dodge", model: "Charger", year: 2020 },
  { brand: "Jeep", model: "Wrangler", year: 2023 },
  { brand: "Porsche", model: "911", year: 2023 },
  { brand: "Ferrari", model: "488", year: 2021 },
  { brand: "Lamborghini", model: "Huracan", year: 2022 },
];

//1. use a for loop to print only cars from the year 2022 or newer(greater)
let carCount = 0;
for (let i = 0; i < myGarage.length; i++) {
  if (myGarage[i].year > 2022) {
    carCount++;
  }
}
console.log(carCount); //output 5

//2. Use a for loop to print the brand and model older than 2022 (less<) and count them
let oldCount = 0;
for (let i = 0; i < myGarage.length; i++) {
  if (myGarage[i].year < 2022) {
    console.log(myGarage[i].brand, myGarage[i].model);
    oldCount++;
  }
}
console.log(oldCount); //output 10
// Honda Civic
// Ford Mustang
// Chevrolet Camaro
// Audi A4
// Nissan Altima
// Hyundai Sonata
// Volkswagen Passat
// Subaru Outback
// Dodge Charger
// Ferrari 488

//use a for loop to print the brand and model year of 2022 and count them
let twoCount = 0;
for (let i = 0; i < myGarage.length; i++) {
  if (myGarage[i].year === 2022) {
    console.log(myGarage[i].brand, myGarage[i].model);
    twoCount++;
  }
}
console.log(twoCount); //output 5
//Toyota Corolla
// Mercedes-Benz C-Class
// Kia Sorento
// Lexus RX 350
// Lamborghini Huracan

let sum = 0;
for (let i = 1; i <= 5; i++) {
  //sum+=i;
  sum = sum + i;
  // 0+1 = 1,
  // 1+2 = 3
  // 3+3 =6,
  // 6+4 = 10,
  // 10 + 5 = 15 (is the answer)
}
console.log(sum); // output 15

//use for loop to print the sum of even numbers from 1 to 20
let sumEven = 0;
let evenCount = 0;
for (let i = 1; i <= 10; i++) {
  if (i % 2 === 0) {
    sumEven = sumEven + i;
    evenCount++;
  }
}
console.log(sumEven); //output 110
console.log(evenCount); //output 10
//use a for loop to print the sum of array of  numbers
//given array const numArr = [3,7,2,9,5]
//output: 26
const numArr = [3, 7, 2, 9, 5];
let sumArr = 0;
for (let i = 0; i < numArr.length; i++) {
  sumArr += numArr[i];
}
console.log(sumArr); //output 26

//only odd number

const numArr1 = [1, 7, 2, 9, 5, 5, 6, 7, 4, 4, 6, 7, 4, 3, 2, 5, 9, 9];
let oddNum = 0;
for (let i = 0; i < numArr1.length; i++) {
  if (i % 2 === 0) {
    oddNum++;
    console.log("odd numbers are", i);
  }
}
// const arr3 = [3, 7, 2, 9, 5];
// let largestNum = 0; //3, 7, 9
// for (let i = 0; i < arr3.length; i++) {
//   // 3 > 0
//   // 7 > 3
//   // 9 > 7
//   if (arr3[i] > largestNum) {
//   }
//   largestNum = arr3[i];
// }
// console.log(largestNum); // output 9

//use a for loop to print the lowest number in the array
//and number can't be negative and cannot be greater than 10

const numArr2 = [1, 3, 2, 7, 5, 8, 4];
let largest = 0;
for (let i = 0; i < numArr2.length; i++) {
  if (numArr2[i] > largest) {
    largest = numArr2[i];
  }
}
console.log(largest); //output 8
//use a for loop to print the lowest number in the array
//and number can't be negative and cannot be greater than 10
let lowest = Infinity;
for (let i = 0; i < numArr2.length; i++) {
  if (numArr2[i] >= 0 && numArr2[i] <= 10) {
    // Check if the number is between 0 and 10
    if (numArr2[i] < lowest) {
      lowest = numArr2[i]; // Update the lowest if the current number is smaller
    }
  }
}

console.log(lowest); //ouput 1

//homework
const numArr7 = [3, 7, 2, 9, 5, 8, 5, 3, 6, 4, 2];
// use a for loop to print the sum of array of even numbers
let evenSum = 0;
for (let i = 0; i < numArr7.length; i++) {
  if (numArr7[i] % 2 === 0) {
    evenSum = evenSum + numArr7[i];
  }
}
console.log(evenSum); //ouput 22

// use a for loop to print the sum of array of odd numbers
let oddSum = 0;
for (let i = 0; i < numArr7.length; i++) {
  if (numArr7[i] % 2 !== 0) {
    //!== to calculate negative numbers as well
    oddSum = oddSum + numArr7[i];
  }
}
console.log(oddSum); //32
// Use a for loop to count even numbers
let countEven = 0;
for (let i = 0; i < numArr7.length; i++) {
  if (numArr7[i] % 2 === 0) {
    countEven++;
  }
}
console.log("There are", countEven, "even numbers"); //5 even numbers

// Use a for loop to count odd numbers
let countOdd = 0;
for (let i = 0; i < numArr7.length; i++) {
  if (numArr7[i] % 2 !== 0) {
    countOdd++;
  }
}
console.log("There are", countOdd, "odd numbers"); // 6 odd numbers

// Use a for loop to count even and odd numbers in one for loop
let countEven1 = 0;
let countOdd1 = 0;
for (let i = 0; i < numArr7.length; i++) {
  if (numArr7[i] % 2 === 0) {
    countEven1++;
  } else {
    countOdd1++;
  }
}
console.log(countEven1, "even numbers", "and", countOdd1, "odd numbers");

// Bonus Challenge
// Use a for loop to print the lowest and largest number
let lowest7 = numArr7[0]; // to see if negative numbers are there
let largest7 = numArr7[0];
for (let i = 0; i < numArr7.length; i++) {
  if (numArr7[i] < lowest7) {
    lowest7 = numArr7[i];
  }
  if (numArr7[i] > largest7) {
    largest7 = numArr7[i];
  }
}
console.log(lowest7, "is the lowest and", largest7, "is the largest"); //2,9

//3/4/2025
//Operators

let score = 85;
if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: D");
}
// Output Grade: B {} is the block scope const inside the block is not accessible
//Global scope is available every where

const globalVariable = "I'm global-scoped!";
if (true) {
  let blockVariable = "I'm blocked-scoped!";
  console.log(blockVariable);
}
// console.log(blockVariable);//error! blockVariable is not defined outside the loop
console.log(globalVariable); // 'I am global-scoped!'

const number = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// using a for loop, print `foo` if the number is divisible by 2, print `bar` if
// number is divisible by 3 and print `foobar` if number is divisbile by 2 && 3

for (let i = 0; i < number.length; i++) {
  if (number[i] % 2 === 0 && number[i] % 3 === 0) {
    console.log("foobar");
  } else if (number[i] % 2 === 0) {
    console.log("foo");
  } else if (number[i] % 3 === 0) {
    console.log("bar");
  } else {
    console.log(number[i]);
  }
}
//output
//  1,foo,bar,foo,5,foobar,7,foo,bar,foo,
// 11,foobar,13,foo,bar,foo,17,foobar,19,foo
//3/6/2025

const numbers1 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
// using a for loop, print `foo` if the number is divisible by 2, print `bar` if
// number is divisible by 3 and print `foobar` if number is divisbile by 2 && 3
for (let i = 0; i < numbers1.length; i++) {
  if (numbers1[i] % 2 === 0 && numbers1[i] % 3 === 0) {
    console.log(numbers1[i], "foodbar");
  } else if (numbers1[i] % 2 === 0) {
    console.log(numbers1[i], "foo");
  } else if (numbers1[i] % 3 === 0) {
    console.log(numbers1[i], "bar");
  }
}
//output 2 foo,3 bar,4 foo,6 foodbar,8 foo,9 bar,10 foo,12 foodbar,14 foo,15 bar,16 foo,18 foodbar,20 foo

const scores = [93, 28, 49, 90, 100, 54, 98, 89, 38, 75, 67, 77, 80];
// using a for loop
// print the grade associated with each number
// A = 94-100
// B = 85-93
// C = 75-84
// D = 65-74
// F = below 65
for (const score of scores) {
  console.log(score);
}
for (let i = 0; i < scores.length; i++) {
  if (scores[i] >= 94 && scores[i] <= 100) {
    console.log(scores[i], "Grade A");
  } else if (scores[i] >= 85 && scores[i] <= 93) {
    console.log(scores[i], "Grade B");
  } else if (scores[i] >= 75 && scores[i] <= 84) {
    console.log(scores[i], "Grade C");
  } else if (scores[i] >= 65 && scores[i] <= 74) {
    console.log(scores[i], "Grade D");
  } else if (scores[i] < 65) {
    console.log(scores[i], "Grade F");
  }
}
//output 93 Grade B,28 Grade F,49 Grade F,90 Grade B,100 Grade A,54 Grade F,98 Grade A,89 Grade B,38 Grade F,75 Grade C
//67 Grade D,77 Grade C,80 Grade C
const songs = [
  {
    title: "bang bang bang",
    artist: "big bang",
    songCount: 48273,
  },
  {
    title: "hello",
    artist: "adele",
    songCount: 4827,
  },
  {
    title: "bye bye bye",
    artist: "nsync",
    songCount: 48272,
  },
  {
    title: "gone",
    artist: "justin timberlake",
    songCount: 27374,
  },
];

// 1. for loop, print the title of the songs that a song count of greater 20000 and is an even number
for (let i = 0; i < songs.length; i++) {
  if (songs[i].songCount > 20000 && songs[i].songCount % 2 === 0) {
    console.log(songs[i].title);
  }
}
// 2. for of loop
for (const x of songs) {
  if (x.songCount > 20000 && x.songCount % 2 === 0) {
    console.log(x.title);
  }
}
// 3. forEach loop
songs.forEach((x) => {
  if (x.songCount > 20000 && x.songCount % 2 === 0) {
    console.log(x.title);
  }
});

//output bye bye bye and gone
// for (const song of songs) {
//   console.log(song);
// }

// for (const x of songs) {
//   console.log(x, title);
// }

// songs.forEach((song) => {
//   console.log(song.title);
// });

const myConsoleLog = () => {
  // function syntax
  //code goes in
  console.log("hello");
};
myConsoleLog(); //to call the function

const add2Plus2 = () => {
  console.log(2 + 2);
};
add2Plus2(); // whoever is calling the function is passing the data

const callMyName = (name) => {
  console.log(name);
};
callMyName("Monica");
callMyName("Chris"); //Monica Chris together, infinite

const callMyName1 = (firstName, LastName) => {
  console.log(firstName, LastName);
};
callMyName1("ben", "kim");
callMyName1("phil", "lee");
callMyName1("monica", "x");

const printSongTitle = (song) => {
  console.log(song.title);
};
printSongTitle({
  title: "bye bye bye",
  artist: "nsync",
  songCount: 48272,
});

//create a function that takes two numbers
//and print the larger number
const biggestNumbers = (num1, num2) => {
  if (num1 > num2) {
    console.log(num1);
  } else if (num2 > num1) {
    console.log(num2);
  }
};
biggestNumbers(1, 3); //output 3

//3/8/2025
const numbers = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
const multiplyTwonumbers = (num1, num2) => {
  console.log(num1 * num2);
};
// multiplyTwonumbers(2, 6);

//callback function
numbers.forEach((num) => {
  multiplyTwonumbers(num, num);
});

const sayHello = () => {
  console.log("Hello");
};

const callAnyFunction = (func) => {
  func();
};

callAnyFunction(sayHello);

//forEach (important)
//first it looks at the array
//it starts to loop through it
//and then for each element in the array
//it executes the function that was passed into forEach

const callBackFun = (num) => {
  multiplyTwonumbers(num, num);
};
numbers.forEach(callBackFun);

// for (let i = 0; i < numbers.length; i++) {
//   const num1 = numbers[i];
//   const num2 = numbers[i];
//   console.log(num1 * num2);
// } not common in professional field

// I want you to create a function that takes each number and printwhether they are even or odd
const oddOrEvenCheck = (num) => {
  if (num % 2 === 0) {
    console.log(num, "even");
  } else {
    console.log(num, "odd");
  }
};
numbers.forEach(oddOrEvenCheck);

// numbers.forEach(oddOrEvenCheck)((num) => {
//   if (num % 2 === 0) {
//     console.log(num, "even");
//   } else {
//     console.log(num, "odd");
//   }
// });

songs.forEach((song) => {
  console.log("song data", song.title);
});

//using forEach on songs, print the song title if the artist is 'justin timberlake'
songs.forEach((x) => {
  if (x.artist === "justin timberlake") {
    console.log(x.title);
  }
});
//using forEach on songs, print song titles for songs that have songCount over 20000
songs.forEach((y) => {
  if (y.songCount > 20000) {
    console.log(y.title);
  }
});

const testData = [
  {
    id: 1,
    title: "Implement Login",
    description: "Allow users to log in with email and password",
    status: "To Do",
    assignedTo: "user1@example.com",
    boardId: 1,
  },
  {
    id: 2,
    title: "Design Landing Page",
    description: "Create a responsive landing page with Tailwind CSS",
    status: "In Progress",
    assignedTo: "user2@example.com",
    boardId: 1,
  },
  {
    id: 3,
    title: "Set Up Database",
    description: "Configure Sequelize with SQLite for development",
    status: "Done",
    assignedTo: "user3@example.com",
    boardId: 2,
  },
  {
    id: 4,
    title: "Create Board Model",
    description: "Define the Board model with Sequelize",
    status: "In QA",
    assignedTo: "user4@example.com",
    boardId: 2,
  },
  {
    id: 5,
    title: "Implement Drag-and-Drop",
    description: "Enable moving work items between columns",
    status: "To Do",
    assignedTo: "user5@example.com",
    boardId: 3,
  },
  {
    id: 6,
    title: "Set Up Authentication",
    description: "Implement JWT-based authentication in the backend",
    status: "In Progress",
    assignedTo: "user1@example.com",
    boardId: 3,
  },
  {
    id: 7,
    title: "Optimize Database Queries",
    description: "Improve Sequelize queries for better performance",
    status: "Done",
    assignedTo: "user2@example.com",
    boardId: 4,
  },
  {
    id: 8,
    title: "Integrate File Uploads",
    description: "Allow users to upload attachments to work items",
    status: "In QA",
    assignedTo: "user3@example.com",
    boardId: 4,
  },
  {
    id: 9,
    title: "Create API Documentation",
    description: "Write API docs using Swagger or Postman",
    status: "To Do",
    assignedTo: "user4@example.com",
    boardId: 5,
  },
  {
    id: 10,
    title: "Implement WebSockets",
    description: "Enable real-time updates for work item status changes",
    status: "In Progress",
    assignedTo: "user5@example.com",
    boardId: 5,
  },
];

// using the testData array
// use forEach to only print elements that have the status of 'Done'
// you can choose to define your callback function as a variable
// or write it directly into the forEach
testData.forEach((task) => {
  if (task.status === "Done") {
    console.log(task);
  }
});

testData.forEach(function (task) {
  if (task.status === "Done") {
    console.log(task);
  }
});
const printDoneTasks = (task) => {
  if (task.status === "Done") {
    console.log(task);
  }
};
testData.forEach(printDoneTasks);

//they are done or prgress
testData.forEach((task) => {
  if (task.status === "Done" || task.status === "In Progress") {
    console.log(task);
  }
});
//print the total number of elemets that have the status done
let doneCount = 0;
testData.forEach((task) => {
  if (task.status === "Done") {
    doneCount++;
  }
});
console.log(doneCount); //output 2

// using the testData array
// use forEach to only print count of each status
// "To Do", "In Progress", "Done", "In QA"
// you can choose to define your callback function as a variable
// or write it directly into the forEach
//to do :2 in progress: 1

let countTodo = 0;
let countInP = 0;
let countDone = 0;
let countInQa = 0;
testData.forEach((task) => {
  if (task.status === "To Do") {
    countTodo++;
  } else if (task.status === "In Progress") {
    countInP++;
  } else if (task.status === "Done") {
    countDone++;
  } else if (task.status === "In QA") {
    countInQa++;
  }
});
console.log("To Do", countTodo); //3
console.log("In Progress", countInP); //3
console.log("Done", countDone); //2
console.log("In QA", countInQa); //2

//array methods
//array.forEach()
//[].forEach()
//[].push, it adds an element to the end of the array
//[].pop, it moves the last element in the array
const arr1 = [1, 2, 3];
arr.push(4);
console.log(arr);
arr.pop();
console.log(arr); //4

//using the testData array
//use the forEach method
//and print an array of just the element that are "In QA"
const inQA = [];
testData.forEach((task) => {
  if (task.status === "In QA") {
    // inQA.push(task.id);
    inQA.push(task);
  }
});
console.log(inQA); //id4, id8

//using the testData array
//use the forEach method
//if the board ID is 2
//print the title
const titles = [];
testData.forEach((task) => {
  if (task.boardId === 2) {
    titles.push(task.title);
  }
});
console.log(titles); //[ 'Set Up Database', 'Create Board Model' ]

// When to use each:
// Use forEach() when:

// You need to perform an operation on each element in an array, and you don’t need to break early or access the index.
// You prefer the clean syntax, and performance is not an issue for small-to-medium-sized arrays.
// Use for loop when:

// You need full control, like accessing the index, breaking early, or optimizing for performance.
// You're iterating over large datasets or need custom loop logic.
// Use for...of when:

// You’re iterating over arrays or other iterable objects (like Maps or Sets), and you want to avoid dealing with indices.
// You prefer cleaner, more readable code with direct access to values.

const numbers2 = [
  1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
];
//print the sum of only odd numbers
let sumOdd = 0;
let oddN = 0;
numbers2.forEach((num) => {
  if (num % 2 !== 0) {
    sumOdd = sumOdd + num;
    oddN++;
  }
});
console.log("sum of odd numbers is", sumOdd); // 100
console.log("count of odd numbers are", oddN); //10

// for (let i = 0; i < numbers2.length; i++) {
//   if (numbers2[i] % 2 !== 0) {
//     sumOdd = sumOdd + numbers2[i];
//   }
// }
// console.log(sumOdd);
//A&B testing ppt

// Homework
// Problem 1
const names = ["Alice", "Bob", "Charlie", "David"];
// Create a function greetUser that takes a name and prints Hi[name]!
// Use forEach to call greetUser() for each element in the array.
const greetUser = (name1) => {
  console.log("Hi, " + name1 + "!");
};
names.forEach(greetUser);
// Problem 2
const pricesUSD = [100, 50, 200, 400];
// Create a function convertCurrency that converts prices from USD to EUR (1 USD = 0.85 EUR).
// Use forEach to apply this function to each price in the array.
const usdToEuro = 0.85;
const convertCurrency = (price) => {
  const euro = price * usdToEuro;
  console.log(euro);
};
pricesUSD.forEach(convertCurrency);
// Problem 3
const products = [
  { name: "Laptop", price: 999 },
  { name: "Mouse", price: 50 },
  { name: "Keyboard", price: 80 },
];
// Create a function displayProduct that prints the name and price of a product.
// Use forEach to apply this function to each product in the array.
const displayProduct = (product) => {
  console.log("name", product.name, "price", product.price);
  console.log(`Name: ${product.name}, Price: $${product.price}`);
};
products.forEach(displayProduct);

// Problem 4
const users = [
  { name: "Alice", active: true },
  { name: "Bob", active: false },
  { name: "Charlie", active: true },
  { name: "David", active: false },
];
// Use forEach to loop through an array of users and print only the active ones.
const activeUser = [];
users.forEach((user) => {
  if (user.active) {
    activeUser.push(user.name);
  }
});
console.log(activeUser); //['Alice', 'Charlie']

const classmates = [
  {
    id: 1,
    firstName: "River",
    lastName: "Auer",
    occupation: "Future Optimization Representative",
    city: "Bethesda",
    class: {
      id: 4,
      subject: "Korean Class",
      content: "learn korean language and culture",
    },
  },
  {
    id: 2,
    firstName: "Phil",
    lastName: "Lee",
    occupation: "SWE",
    city: "Washington, DC",
    class: {
      id: 1,
      subject: "QA",
      content: "5months QA bootcamp",
    },
  },
  {
    id: 3,
    firstName: "Laurianne",
    lastName: "Rolfson",
    occupation: "Future Optimization Agent",
    city: "Bennetthaven",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 4,
    firstName: "Saul",
    lastName: "Bartell",
    occupation: "Internal Research Technician",
    city: "Yazminhaven",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 5,
    firstName: "Orlando",
    lastName: "Harris",
    occupation: "District Accountability Specialist",
    city: "Clemenscester",
    class: {
      id: 1,
      subject: "QA",
      content: "5months QA bootcamp",
    },
  },
  {
    id: 6,
    firstName: "Vesta",
    lastName: "Kuhlman",
    occupation: "Customer Functionality Developer",
    city: "Berkeley",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 7,
    firstName: "Gretchen",
    lastName: "Hackett",
    occupation: "Direct Implementation Designer",
    city: "New Lydiaborough",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 8,
    firstName: "Roger",
    lastName: "Schuster",
    occupation: "Product Mobility Director",
    city: "East Sibyl",
    class: {
      id: 3,
      subject: "Basic Computer Skill",
      content: "very basic to advanced computer skills",
    },
  },
];

// using the classmates array and a for loop (your choice of loops),
// return the first and last name of everyone who is taking the "5months QA bootcamp"
//create a function called `getNamesForQaClas

// function getNamesForQaClass(array) {
//   for (let i = 0; i < array.length; i++) {
//     if (array[i].class.content === "5months QA bootcamp") {
//       console.log(array[i].firstName, array[i].lastName);
//     }
//   }
// }
// getNamesForQaClass(classmates);//Phil Lee, Orlando Harris
const getNamesForQaClass = (classmates) => {
  const names = [];

  // Loop through each student in the classmates array
  classmates.forEach((student) => {
    // Check if the student's class content is '5months QA bootcamp'
    if (student.class.content === "5months QA bootcamp") {
      // Push the student's full name to the names array
      names.push(student.firstName + " " + student.lastName);
    }
  });

  return names;
};
console.log(getNamesForQaClass(classmates));

//create a function called getNamesForClass (classmates,classId)
//return all names (first,last) of students that match the classId
const getNamesForClass = (classmates, classId) => {
  const names = [];

  // Loop through each student in the classmates array
  classmates.forEach((student) => {
    // Check if the student's classId matches the provided classId
    if (student.class.id === classId) {
      // Push the student's full name (first + last) to the names array
      names.push(student.firstName + " " + student.lastName);
    }
  });

  return names;
};
// const classIdToMatch = 3;
// console.log(getNamesForClass(classmates, classIdToMatch)); //[Roger Shuster ]
console.log(getNamesForClass(classmates, 2));

//create a function that uses a map with classmates,
//return an array of cities for where class id is 2
//use filter

// Bonus Challenge
// after filter, you will get new Array variable
// using that array with .map() to get only `cities`

// const getCitiesByClass1 = (classmates, classId) => {
//   return classmates.map((classmate) => {
//     if (classmate.classId === classId) {
//       return classmate.city;
//     }
//   });
// };

// console.log(getCitiesByClass1(classmates, 2));

const getCitiesByClass = (classmates, classId) => {
  return classmates
    .filter((classmate) => classmate.class.id === classId)
    .map((classmate) => classmate.city);
};
console.log(getCitiesByClass(classmates, 2)); //[ 'Bennetthaven', 'Yazminhaven', 'Berkeley', 'New Lydiaborough' ]
// Bonus Challenge
// after filter, you will get new Array variable
// using that array with .map() to get only `cities`

const getCitiesByClass3 = (classmates, classId) => {
  // First filter to get the correct classmates
  const filteredClassmates = classmates.filter(
    (classmate) => classmate.class.id === classId
  );

  // Then map the filtered array to get only the cities
  return filteredClassmates.map((classmate) => classmate.city);
};

console.log(getCitiesByClass3(classmates, 2));
// Output: ['New Lydiaborough', 'Chicago']

//using classmates, create a function that uses map to return an array of objects, but just id, firstName and lastName

const getClassmates = (classmates) => {
  return classmates.map(({ id, firstName, lastName }) => ({
    id,
    firstName,
    lastName,
  }));
};
console.log(getClassmates(classmates));
// output should be like
// [{id: x, firstName: xxx, lastName: xxx}, {id: y, firstName: yyy, lastName: yyy}]

// Bonus Challenge
// [{id: x, firstName: xxx, lastName: xxx, classId: z}, {id: y, firstName: yyy, lastName: yyy, classId: z}]

const getClassmatesAll = (classmates) => {
  return classmates.map(
    ({ id, firstName, lastName, class: { id: classId } }) => ({
      id,
      firstName,
      lastName,
      classId,
    })
  );
};
console.log(getClassmatesAll(classmates));

const numArr3 = [
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

//3/25/2025
//create a function called sumNumbers
//it takes 2 arguments and returns their sum
//eg: sumNumbers
//return 11
const sumNumbers = (num1, num2) => {
  return num1 + num2;
};
console.log(sumNumbers(5, 6)); //11

// create a fuction called findName
// it will take an array of names (as a string) and the name you want to search
// and return true if the name is in the array
// or false, if it is not
// eg: findName(['bob', 'mike', 'ben', 'phil'], 'phil')
// returns true
const findName = (array, name) => {
  return array.includes(name);
};
console.log(findName(["bob", "mike", "ben", "phil"], "phil")); //true

const findName2 = (array, name) => {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === name) {
      return true; //break early than forEach
    }
  }
  return false;
};
console.log(findName2(["bob", "mike", "ben", "phil"], "monica")); //false

const findName1 = (arrayOfNames, name) => {
  let result = false;
  arrayOfNames.forEach((n) => {
    if (n === name) {
      result = true; //will continue to look name, each name no matter what
    }
  });
  return result;
};
console.log(findName1(["bob", "mike", "ben", "phil"], "monica")); //false

const classmates1 = [
  {
    id: 1,
    firstName: "River",
    lastName: "Auer",
    occupation: "Future Optimization Representative",
    city: "Bethesda",
    class: {
      id: 4,
      subject: "Korean Class",
      content: "learn korean language and culture",
    },
  },
  {
    id: 2,
    firstName: "Phil",
    lastName: "Lee",
    occupation: "SWE",
    city: "Washington, DC",
    class: {
      id: 1,
      subject: "QA",
      content: "5months QA bootcamp",
    },
  },
  {
    id: 3,
    firstName: "Laurianne",
    lastName: "Rolfson",
    occupation: "Future Optimization Agent",
    city: "Bennetthaven",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 4,
    firstName: "Saul",
    lastName: "Bartell",
    occupation: "Internal Research Technician",
    city: "Yazminhaven",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 5,
    firstName: "Orlando",
    lastName: "Harris",
    occupation: "District Accountability Specialist",
    city: "Clemenscester",
    class: {
      id: 1,
      subject: "QA",
      content: "5months QA bootcamp",
    },
  },
  {
    id: 6,
    firstName: "Vesta",
    lastName: "Kuhlman",
    occupation: "Customer Functionality Developer",
    city: "Berkeley",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 7,
    firstName: "Gretchen",
    lastName: "Hackett",
    occupation: "Direct Implementation Designer",
    city: "New Lydiaborough",
    class: {
      id: 2,
      subject: "Kids Coding",
      content: "kids after-school coding class",
    },
  },
  {
    id: 8,
    firstName: "Roger",
    lastName: "Schuster",
    occupation: "Product Mobility Director",
    city: "East Sibyl",
    class: {
      id: 3,
      subject: "Basic Computer Skill",
      content: "very basic to advanced computer skills",
    },
  },
];
//create a function called getStudentForSubject which takes in the
//the classmates array and a subject, it should return an array of student
//objects that only contain the subject you requested

const getStudentForSubject = (classmates, subject) => {
  return classmates.filter((student) => student.class.subject === subject);
};
console.log(getStudentForSubject(classmates, "Korean Class")); //id1

const getStudentForSubject1 = (classmates, subject) => {
  const result = [];
  for (let i = 0; i < classmates.length; i++) {
    if (classmates[i].class.subject === subject) {
      result.push(classmates[i]);
    }
  }
  return result;
};
console.log(getStudentForSubject1(classmates1, "Korean Class"));
