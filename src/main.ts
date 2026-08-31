import { buscarPokemon } from "./services/PokeApiService.js";
import { CatalogoPokemon } from "./services/LocalBoxService.js";

const catalogo = new CatalogoPokemon();

await catalogo.carregar();
const pikachu = await buscarPokemon("pikachu");
const charmander = await buscarPokemon("charmander");
const inexistente = await buscarPokemon("pokemon-inexistente");

if (pikachu !== null) {
    await catalogo.adicionar(pikachu);
}

if (charmander !== null) {
    await catalogo.adicionar(charmander);
}

if (pikachu !== null) {
    await catalogo.adicionar(pikachu);
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

await catalogo.remover(25);

catalogo.listar();