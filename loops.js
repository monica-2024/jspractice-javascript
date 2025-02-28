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
    console.log(cars[carIndex1]);
    break;
  }
  idex++;
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
