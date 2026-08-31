import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../services/LocalBoxService.js";

export class TerminalController {
    private catalogo = new CatalogoPokemon();

    async iniciar(): Promise<void> {
        await this.catalogo.carregar();

        const pikachu = await buscarPokemon("pikachu");
        const charmander = await buscarPokemon("charmander");
        const inexistente = await buscarPokemon("pokemon-inexistente");

        if (pikachu !== null) {
            await this.catalogo.adicionar(pikachu);
        }

        if (charmander !== null) {
            await this.catalogo.adicionar(charmander);
        }

        if (pikachu !== null) {
            await this.catalogo.adicionar(pikachu);
        }

        if (inexistente === null) {
            console.log("[ERRO] Pokémon não encontrado: pokemon-inexistente");
        }

        this.catalogo.listar();

        const pokemonEncontrado = this.catalogo.buscar(25);

        if (pokemonEncontrado) {
            console.log("Pokémon encontrado no catálogo:");
            console.log(pokemonEncontrado);
        } else {
            console.log("[AVISO] Pokémon não encontrado no catálogo.");
        }

        await this.catalogo.remover(25);

        this.catalogo.listar();
    }
}