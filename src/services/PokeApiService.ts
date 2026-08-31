import type { PokemonResumo, PokemonApiResponse } from "../models/Pokemon.js";

export async function buscarPokemon(
    nomeOuId: string
): Promise<PokemonResumo | null> {

    try {
        const resposta = await fetch(
            `https://pokeapi.co/api/v2/pokemon/${nomeOuId}`
        );

        if (!resposta.ok) {
            return null;
        }

        const dados = await resposta.json() as PokemonApiResponse;

        const pokemon: PokemonResumo = {
            id: dados.id,
            nome: dados.name,
            tipos: dados.types.map((item) => item.type.name),
            altura: dados.height,
            peso: dados.weight
        };

        return pokemon;

    } catch (error) {
        return null;
    }
}