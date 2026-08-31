# Pokédex TypeScript Lite

Projeto desenvolvido como mini-projeto avaliativo do módulo de Back-end com Node.js e TypeScript.

A aplicação consulta dados de Pokémon utilizando a PokéAPI, transforma os dados recebidos em um formato simplificado e permite armazená-los em um catálogo local com persistência em arquivo JSON.

O projeto utiliza uma arquitetura modular com separação de responsabilidades entre Controllers, Services, Models e Utils.

## Objetivo

O objetivo do projeto é praticar conceitos fundamentais de desenvolvimento Back-end com Node.js e TypeScript, incluindo:

- Tipagem com interfaces
- Classes e modificadores de acesso
- Arrays e métodos de array
- Consumo de API REST externa
- Fetch
- Promises
- Async/Await
- Tratamento de erros com try/catch
- Persistência local em arquivo JSON
- Manipulação de arquivos com `node:fs/promises`
- Organização modular do código
- Separação de responsabilidades em camadas
- Versionamento com Git e GitHub

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokéAPI
- Node File System (`node:fs/promises`)
- JSON
- Git
- GitHub
- Trello

## Pré-requisitos

Antes de executar o projeto, é necessário ter instalado:

- Node.js
- npm

## Instalação

Clone o repositório:

```bash
git clone https://github.com/ramonmsantana/pokedex-typescript-lite.git
```

Acesse a pasta do projeto:

```bash
cd pokedex-typescript-lite
```

Instale as dependências:

```bash
npm install
```

## Como executar

Para executar o projeto em ambiente de desenvolvimento:

```bash
npm run dev
```

Para compilar o código TypeScript:

```bash
npm run build
```

## Funcionalidades

A aplicação permite:

- Buscar Pokémon por nome ou ID utilizando a PokéAPI
- Transformar os dados recebidos da API em um objeto simplificado
- Adicionar Pokémon ao catálogo local
- Impedir a adição de Pokémon duplicado
- Listar os Pokémon armazenados no catálogo
- Buscar Pokémon no catálogo pelo ID
- Remover Pokémon do catálogo pelo ID
- Tratar a busca de Pokémon inexistente
- Persistir o catálogo localmente no arquivo `pc_box.json`
- Carregar os Pokémon salvos ao iniciar a aplicação
- Exibir mensagens de sucesso, aviso e erro no terminal

## Estrutura do projeto

```text
pokedex-typescript-lite/
├── src/
│   ├── controllers/
│   │   └── TerminalController.ts
│   ├── models/
│   │   └── Pokemon.ts
│   ├── services/
│   │   ├── LocalBoxService.ts
│   │   └── PokeApiService.ts
│   ├── utils/
│   │   └── textFormatters.ts
│   └── main.ts
├── pc_box.json
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

## Arquitetura

A aplicação foi organizada em camadas para separar as responsabilidades de cada parte do sistema.

### Controllers

A camada `controllers` coordena o fluxo da aplicação.

O arquivo `TerminalController.ts` utiliza os serviços responsáveis pela consulta à PokéAPI e pelo gerenciamento do catálogo local.

### Services

A camada `services` concentra as regras de negócio e o acesso aos dados.

- `PokeApiService.ts`: realiza a consulta de Pokémon na PokéAPI utilizando `fetch`, `async/await` e tratamento de erros.
- `LocalBoxService.ts`: gerencia o catálogo de Pokémon, incluindo carregamento, adição, busca, listagem, remoção e persistência dos dados.

### Models

A camada `models` contém os contratos de dados utilizados pela aplicação.

O arquivo `Pokemon.ts` possui as interfaces responsáveis pela tipagem dos dados recebidos da PokéAPI e dos objetos simplificados utilizados pelo sistema.

### Utils

A camada `utils` contém funções auxiliares utilizadas pela aplicação.

O arquivo `textFormatters.ts` é responsável pela formatação dos dados dos Pokémon para exibição no terminal.

### main.ts

O arquivo `main.ts` é o ponto de entrada da aplicação.

Ele instancia o controller e inicia a execução do programa.

### pc_box.json

O arquivo `pc_box.json` funciona como a base de dados local da aplicação.

Ele é lido e atualizado utilizando `node:fs/promises`, permitindo que os dados do catálogo sejam persistidos em disco.

O arquivo é disponibilizado inicialmente com um array vazio:

```json
[]
```

## Conceitos aplicados

Durante o desenvolvimento foram aplicados os seguintes conceitos:

- Interfaces e tipagem de dados com TypeScript
- Tipos primitivos, arrays e objetos
- Funções com parâmetros e retornos tipados
- Classes e modificadores de acesso
- Arrays armazenados dentro de classes
- Métodos de array como `map()`, `some()`, `find()`, `filter()` e `forEach()`
- Consumo de API REST externa utilizando `fetch()`
- Promises
- Funções assíncronas com `async/await`
- Tratamento de erros utilizando `try/catch`
- Manipulação de JSON
- Persistência local com `node:fs/promises`
- Leitura e escrita de arquivos
- Separação de responsabilidades em Controllers, Services, Models e Utils
- Organização modular do código

## Fluxo da aplicação

Ao iniciar a aplicação:

1. O catálogo existente é carregado a partir do arquivo `pc_box.json`.
2. A aplicação consulta Pokémon na PokéAPI.
3. Os dados recebidos são transformados para o formato utilizado pelo sistema.
4. Os Pokémon podem ser adicionados ao catálogo.
5. A aplicação verifica e impede Pokémon duplicados.
6. O catálogo pode ser listado e consultado.
7. Pokémon podem ser removidos pelo ID.
8. As alterações realizadas no catálogo são persistidas no arquivo `pc_box.json`.

## Exemplo de execução

Antes da execução de demonstração, considerando o arquivo `pc_box.json` inicializado com:

```json
[]
```

execute:

```bash
npm run dev
```

Exemplo de saída:

```text
[OK] pikachu adicionado ao catálogo.
[OK] charmander adicionado ao catálogo.
[AVISO] pikachu já está no catálogo.
[ERRO] Pokémon não encontrado: pokemon-inexistente
#25 - pikachu | Tipos: electric | Altura: 4 | Peso: 60
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
Pokémon encontrado no catálogo:
{ id: 25, nome: 'pikachu', tipos: [ 'electric' ], altura: 4, peso: 60 }
[OK] Pokémon removido do catálogo.
#4 - charmander | Tipos: fire | Altura: 6 | Peso: 85
```

Durante a execução, as alterações realizadas no catálogo são gravadas no arquivo `pc_box.json`.

## Kanban

O acompanhamento das tarefas do projeto foi realizado utilizando o Trello.

[Visualizar quadro do projeto no Trello](https://trello.com/b/0z5KjB8w)

## Versionamento

O projeto foi versionado utilizando Git e GitHub, com separação do desenvolvimento em branches e utilização de commits semânticos.

Branches utilizadas:

- `main`: versão principal e estável do projeto.
- `develop`: integração das funcionalidades desenvolvidas.
- `feat/pokedex`: desenvolvimento das funcionalidades iniciais da Pokédex.
- `docs/readme`: criação e atualização da documentação inicial do projeto.
- `refactor/arquitetura-camadas`: adequação da arquitetura em camadas e implementação da persistência local.