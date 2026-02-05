// Chamar Função
torrar()


//Funções
//podemos chamar fuções dentro de outras funções. o injetarPao abaixo chama a função criada por ultimo.
function torrar () {
    console.log("Torrar Pão")
    injetarPao()
}

function injetarPao (){
    console.log("Preparando para injetar o pão")
     console.log("filizado")
}
//
//nome de funcoes não pode inicar com numeros, não podem ter espaço.
//Funções são acções, então os nomes por melhor pŕatica tem que ser um verbo.

// exemplo
function getData (){

}

function checkValues(){

}

function sendDatabase(){

}

//Geralmente é crada uma função principal para chamar todas as funções.

function mainSaveData(){
    getData()
    checkValues()
    sendDatabase()
}

