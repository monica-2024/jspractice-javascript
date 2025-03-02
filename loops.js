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

let carIndex1 = 0;
while (carIndex1 < cars.length) {
  if (cars[carIndex1] === "bmw");
  {
    console.log("found bmw!");
    break;
  }
  carIndex1++;
}

let num = 1;
while (num <= 5) {
  console.log(num);
  num++;
}
//1,2,3,4,5

let count = 5;
while (count >= 1) {
  console.log(count);
  count--;
}
//5,4,3,2,1

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
let lowest7 = numArr7[0];
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
