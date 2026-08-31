import type { PokemonResumo } from "./types.js";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    adicionar(pokemon: PokemonResumo): void {
        const pokemonJaExiste = this.pokemons.some(
            (item) => item.id === pokemon.id
        );

    if (pokemonJaExiste) {
        console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
        return;
    }

    this.pokemons.push(pokemon);

    console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
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
    const pokemonEncontrado = this.pokemons.find(
        (pokemon) => pokemon.id === id
    );

    if (!pokemonEncontrado) {
        console.log("[AVISO] Nenhum Pokémon encontrado com esse ID.");
        return;
    }

    this.pokemons = this.pokemons.filter(
        (pokemon) => pokemon.id !== id
    );

    console.log("[OK] Pokémon removido do catálogo.");
    }
    
    buscar(id: number): PokemonResumo | undefined {
    return this.pokemons.find(
        (pokemon) => pokemon.id === id
    );
    }
}