import { createInterface } from "node:readline/promises";
import { stdin as input, stdout as output } from "node:process";
import { buscarPokemon } from "../services/PokeApiService.js";
import { CatalogoPokemon } from "../services/LocalBoxService.js";


export class TerminalController {
    private catalogo = new CatalogoPokemon();

    private terminal = createInterface({
        input,
        output
    });

    async iniciar(): Promise<void> {
        await this.catalogo.carregar();

        let executando = true;

        while (executando) {
            console.log("\n========== POKÉDEX ==========");
            console.log("1 - Buscar Pokémon na PokéAPI");
            console.log("2 - Adicionar Pokémon ao catálogo");
            console.log("3 - Listar catálogo");
            console.log("4 - Buscar Pokémon no catálogo");
            console.log("5 - Remover Pokémon do catálogo");
            console.log("0 - Sair");

            const opcao = await this.terminal.question(
                "\nEscolha uma opção: "
            );

            switch (opcao) {
                case "1":
                    await this.buscarNaApi();
                    break;

                case "2":
                    await this.adicionarPokemon();
                    break;

                case "3":
                    this.catalogo.listar();
                    break;

                case "4":
                    await this.buscarNoCatalogo();
                    break;

                case "5":
                    await this.removerPokemon();
                    break;

                case "0":
                    executando = false;
                    console.log("\nPokédex encerrada.");
                    break;

                default:
                    console.log("\n[AVISO] Opção inválida.");
            }
        }

        this.terminal.close();
    }

    private async buscarNaApi(): Promise<void> {
        const nome = await this.terminal.question(
            "\nDigite o nome do Pokémon: "
        );

        const pokemon = await buscarPokemon(nome);

        if (pokemon === null) {
            console.log(`[ERRO] Pokémon não encontrado: ${nome}`);
            return;
        }

        console.log("\nPokémon encontrado:");
        console.log(pokemon);
    }

    private async adicionarPokemon(): Promise<void> {
        const nome = await this.terminal.question(
            "\nDigite o nome do Pokémon: "
        );

        const pokemon = await buscarPokemon(nome);

        if (pokemon === null) {
            console.log(`[ERRO] Pokémon não encontrado: ${nome}`);
            return;
        }

        await this.catalogo.adicionar(pokemon);
    }

    private async buscarNoCatalogo(): Promise<void> {
        const entrada = await this.terminal.question(
            "\nDigite o ID do Pokémon: "
        );

        const id = Number(entrada);

        if (Number.isNaN(id)) {
            console.log("[AVISO] Digite um ID válido.");
            return;
        }

        const pokemon = this.catalogo.buscar(id);

        if (pokemon) {
            console.log("\nPokémon encontrado no catálogo:");
            console.log(pokemon);
        } else {
            console.log("[AVISO] Pokémon não encontrado no catálogo.");
        }
    }

    private async removerPokemon(): Promise<void> {
        const entrada = await this.terminal.question(
            "\nDigite o ID do Pokémon: "
        );

        const id = Number(entrada);

        if (Number.isNaN(id)) {
            console.log("[AVISO] Digite um ID válido.");
            return;
        }

        await this.catalogo.remover(id);
    }
}