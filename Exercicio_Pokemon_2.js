
let cadastroPokemons = [
   {nome: "Poochyena", nivel: "2", sexo: "Macho", currentHP: "13", maxHP: "13"},
   {nome: "Zigzagoon", nivel: "2", sexo: "Femea", currentHP: "13", maxHP: "13"},
   {nome: "Dragonite", nivel: "5", sexo: "Macho", currentHP: "25", maxHP: "25"},
   {nome: "Dragonite", nivel: "5", sexo: "Femea", currentHP: "24", maxHP: "24"},
   {nome: "Poochyena", nivel: "3", sexo: "Femea", currentHP: "15", maxHP: "15"},
   {nome: "Wurmple", nivel: "2", sexo: "Macho", currentHP: "7", maxHP: "14"},
];
//console.log(cadastradopokemon);

let cadastroPokemon1 = cadastroPokemons[0];
let cadastroPokemon2 = cadastroPokemons[1];
//console.log(cadastroPokemon1);

if(cadastroPokemon1.nome)  {
    cadastroPokemon1.nome !== "";
    console.log("Cadastro " + cadastroPokemon1.nome + " realizado com sucesso!");
}
else {
    console.log("Erro no cadastro do Pokémon");
}

if(cadastroPokemon2.nome)  {
    cadastroPokemon2.nome !== "";
    console.log("Cadastro " + cadastroPokemon2.nome + " realizado com sucesso!");
}
else {
    console.log("Erro no cadastro do Pokémon");
}