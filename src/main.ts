import { buscarPokemon } from "./pokeApi.js";

const nomeOuId = "pokemon-inexistente";

const pokemon = await buscarPokemon(nomeOuId);

if (pokemon === null) {
    console.log(`[ERRO] Pokémon não encontrado: ${nomeOuId}`);
} else {
    console.log(pokemon);
}