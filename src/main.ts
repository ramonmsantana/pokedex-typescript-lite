import { buscarPokemon } from "./pokeApi.js";

const pokemon = await buscarPokemon("pikachu");

console.log(pokemon);