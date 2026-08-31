import { buscarPokemon } from "./pokeApi.js";
import { CatalogoPokemon } from "./catalogo.js";

const catalogo = new CatalogoPokemon();

const pokemon = await buscarPokemon("pikachu");

if (pokemon === null) {
    console.log("[ERRO] Pokémon não encontrado: pikachu");
} else {
    catalogo.adicionar(pokemon);
    catalogo.listar();
}