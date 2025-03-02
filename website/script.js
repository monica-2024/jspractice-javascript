//3/1/2025
function changeText() {
  document.getElementById("message").innerText = "JavaScript is fun!";
  document.getElementById("greeting").innerText = "You are now code-master!";
}

// Array of food items
const foods = [
  "Pho",
  "Korean Ramyun(Spicy)",
  "Egg Jjim",
  "Popeyes",
  "Jja Jang Myun(only Choong Hwa Won)",
  "Jjam Bbong(only Morak)",
];

// TO-DO
// 1. Get the <ul> element with id "food-list"
// 2. Create a <li> element for each food item in the array
// 3. Set the text content of each <li> element to a food item
// 4. Append each <li> element to the <ul> element
function renderListFavoriteFoods() {
  const ul = document.getElementById("food-list");
  ul.innerHTML = null;
  for (let i = 0; i < foods.length; i++) {
    const li = document.createElement("li");
    li.textContent = foods[i];
    ul.appendChild(li);
  }
}

const hobbies = ["coding", "QA"];
function renderListMyHobbies() {
  const ul = document.getElementById("hobby-list");
  ul.innerHTML = null;
  for (let i = 0; i < hobbies.length; i++) {
    const li = document.createElement("li");
    li.textContent = hobbies[i];
    ul.appendChild(li);
  }
}

function handleSubmit() {
  let username = document.getElementById("username").value;
  let password = document.getElementById("password").value;
  //   let agree = document.getElementById("agree").checked;
  // TO-DO
  //display username and password inside of the div with id 'message'
  const message = document.getElementById("message-3");
  message.innerText = `Username: ${username}, Password: ${password}`;

  return false;
}
