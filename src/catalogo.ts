import type { PokemonResumo } from "./types.js";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        this.pokemons.push(pokemon);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }

        this.pokemons.forEach((pokemon) => {
            console.log(
                `#${pokemon.id} - ${pokemon.nome} | Tipos: ${pokemon.tipos.join(", ")} | Altura: ${pokemon.altura} | Peso: ${pokemon.peso}`
            );
        });
    }

    remover(id: number): void {
        this.pokemons = this.pokemons.filter((pokemon) => pokemon.id !== id);
    }
}