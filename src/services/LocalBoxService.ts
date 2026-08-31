import { readFile, writeFile } from "node:fs/promises";
import type { PokemonResumo } from "../models/Pokemon.js";
import { formatarPokemon } from "../utils/textFormatters.js";

const CAMINHO_ARQUIVO = "./pc_box.json";

export class CatalogoPokemon {
    private pokemons: PokemonResumo[] = [];

    async carregar(): Promise<void> {
        try {
            const conteudo = await readFile(CAMINHO_ARQUIVO, "utf-8");

            this.pokemons = JSON.parse(conteudo) as PokemonResumo[];
        } catch (error) {
            this.pokemons = [];

            await this.salvar();
        }
    }

    private async salvar(): Promise<void> {
        const conteudo = JSON.stringify(this.pokemons, null, 2);

        await writeFile(CAMINHO_ARQUIVO, conteudo, "utf-8");
    }

    async adicionar(pokemon: PokemonResumo): Promise<void> {
        const pokemonJaExiste = this.pokemons.some(
            (item) => item.id === pokemon.id
        );

        if (pokemonJaExiste) {
            console.log(`[AVISO] ${pokemon.nome} já está no catálogo.`);
            return;
        }

        this.pokemons = [...this.pokemons, pokemon];

        await this.salvar();

        console.log(`[OK] ${pokemon.nome} adicionado ao catálogo.`);
    }

    listar(): void {
        if (this.pokemons.length === 0) {
            console.log("[AVISO] Catálogo vazio.");
            return;
        }
        
        this.pokemons.forEach((pokemon) => {
            console.log(formatarPokemon(pokemon));
        });
    }

    async remover(id: number): Promise<void> {
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

        await this.salvar();

        console.log("[OK] Pokémon removido do catálogo.");
    }

    buscar(id: number): PokemonResumo | undefined {
        return this.pokemons.find(
            (pokemon) => pokemon.id === id
        );
    }
}