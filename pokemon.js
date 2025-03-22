const pokemonData = require("./pokemonData.js");

const sizeMediumPokemon = pokemonData.filter((pokemon) => {
  return pokemon.size === "medium";
});
console.log("Medium-sized Pokemon:", sizeMediumPokemon);
console.log(sizeMediumPokemon.length);

//includes flying

const sizeMediumFlyingPokemon = pokemonData.filter((pokemon) => {
  return pokemon.size === "medium" && pokemon.type.includes("Flying");
});
console.log("Medium-sized Flying Pokemon:", sizeMediumFlyingPokemon);
console.log(sizeMediumFlyingPokemon.length); //12

const flyingOrElectricPokemon = pokemonData.filter((pokemon) => {
  return pokemon.type.includes("Flying") || pokemon.type.includes("Electric");
});
console.log(flyingOrElectricPokemon);
console.log(flyingOrElectricPokemon.length); //27
