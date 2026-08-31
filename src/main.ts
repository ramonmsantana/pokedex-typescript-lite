import { buscarPokemon } from "./pokeApi.js";
import { CatalogoPokemon } from "./catalogo.js";

const catalogo = new CatalogoPokemon();

const pikachu = await buscarPokemon("pikachu");
const charmander = await buscarPokemon("charmander");
const inexistente = await buscarPokemon("pokemon-inexistente");

if (pikachu !== null) {
    catalogo.adicionar(pikachu);
}

if (charmander !== null) {
    catalogo.adicionar(charmander);
}

if (pikachu !== null) {
    catalogo.adicionar(pikachu);
}

if (inexistente === null) {
    console.log("[ERRO] Pokémon não encontrado: pokemon-inexistente");
}

catalogo.listar();

const pokemonEncontrado = catalogo.buscar(25);

if (pokemonEncontrado) {
    console.log("Pokémon encontrado no catálogo:");
    console.log(pokemonEncontrado);
} else {
    console.log("[AVISO] Pokémon não encontrado no catálogo.");
}

catalogo.remover(25);

catalogo.listar();