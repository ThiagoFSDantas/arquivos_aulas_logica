// script.js
    // Importing the readline module to handle user input
const readline = require('readline');
        // Creating an interface for input and output
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
//
let cadastroPokemons = []
function cadastrarPokemon(){
    rl.question("Digite o nome do Pokémon: ", (nome) => {
        rl.question("Digite o tipo do Nivel do Pokemon: ", (tipo) => {
            rl.question("Digite o Sexo do Pokémon: ", (sexo) => {
                rl.question("Digite a Vida Atual do Pokémon: ", (currentHP) =>{
                    rl.question("Digite a Vida Maxima do Pokémon: ", (maxHP) =>{

                        // adiciona os dados como uma linha de matriz
                        cadastroPokemons.push([nome, tipo, sexo, currentHP, maxHP]);
                        console.log("Pokémon " + nome + " cadastrado com sucesso!");
                        //console.log(cadastroPokemons)
                        //
                        cadastrarPokemon();
                    });
                });    
            });
        });
    });
}
cadastrarPokemon();