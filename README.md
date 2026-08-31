# Pokédex TypeScript Lite

Projeto desenvolvido como mini-projeto avaliativo do módulo de Back-end com Node.js e TypeScript.

A aplicação consulta dados de Pokémon utilizando a PokéAPI, transforma os dados recebidos em um formato simplificado e permite armazenar os Pokémon em um catálogo local em memória.

## Objetivo

O objetivo do projeto é praticar conceitos fundamentais de desenvolvimento Back-end com Node.js e TypeScript, incluindo:

- Tipagem com interfaces
- Classes e modificadores de acesso
- Arrays e métodos de array
- Consumo de API externa
- Fetch
- Promises
- Async/Await
- Tratamento de erros com try/catch
- Organização modular do código
- Versionamento com Git e GitHub

## Tecnologias utilizadas

- Node.js
- TypeScript
- TSX
- PokéAPI
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
- Exibir mensagens de sucesso, aviso e erro no terminal

## Estrutura do projeto

```text
pokedex-typescript-lite/
├── src/
│   ├── main.ts
│   ├── catalogo.ts
│   ├── pokeApi.ts
│   └── types.ts
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
└── README.md
```

### Arquivos principais

- `src/main.ts`: executa o fluxo de demonstração da aplicação.
- `src/catalogo.ts`: contém a classe responsável pelo catálogo local e suas operações.
- `src/pokeApi.ts`: realiza a consulta de Pokémon na PokéAPI e transforma os dados recebidos.
- `src/types.ts`: contém as interfaces utilizadas para tipagem dos dados.
- `tsconfig.json`: contém as configurações do TypeScript.
- `package.json`: contém as dependências e scripts do projeto.

## Conceitos aplicados

Durante o desenvolvimento foram aplicados os seguintes conceitos:

- Interfaces e tipagem de dados com TypeScript
- Tipos primitivos, arrays e objetos
- Funções com parâmetros e retornos tipados
- Classes e modificadores de acesso
- Arrays armazenados dentro de classes
- Métodos de array como `map()`, `some()`, `find()`, `filter()` e `forEach()`
- Consumo de API externa utilizando `fetch()`
- Promises
- Funções assíncronas com `async/await`
- Tratamento de erros utilizando `try/catch`
- Organização modular do código

## Exemplo de execução

Ao executar:

```bash
npm run dev
```

A aplicação realiza uma demonstração das principais funcionalidades da Pokédex.

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

## Kanban

O acompanhamento das tarefas do projeto foi realizado utilizando o Trello.

[Visualizar quadro do projeto no Trello](https://trello.com/b/0z5KjB8w)

## Versionamento

O projeto foi versionado utilizando Git e GitHub, com separação do desenvolvimento em branches.

Branches utilizadas:

- `main`: versão principal e estável do projeto.
- `develop`: integração das funcionalidades desenvolvidas.
- `feat/pokedex`: desenvolvimento das funcionalidades da Pokédex.
- `docs/readme`: criação e atualização da documentação do projeto.