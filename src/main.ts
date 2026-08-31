import { buscarPokemon } from "./pokeApi.js";
import { CatalogoPokemon } from "./catalogo.js";

const catalogo = new CatalogoPokemon();

catalogo.listar();

const pikachu = await buscarPokemon("pikachu");
const charmander = await buscarPokemon("charmander");

if (pikachu !== null) {
    catalogo.adicionar(pikachu);
}

if (charmander !== null) {
    catalogo.adicionar(charmander);
}

catalogo.listar();

const pokemonEncontrado = catalogo.buscar(999);

if (pokemonEncontrado) {
    console.log("Pokémon encontrado no catálogo:");
    console.log(pokemonEncontrado);
} else {
    console.log("[AVISO] Pokémon não encontrado no catálogo.");
}