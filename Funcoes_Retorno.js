

//let resultado = soma(10 , 5)
//console.log(`O Resultado da função é ${resultado}`)


let userName = getFirstName("Thiago Faria Souza Dantas")
console.log('Seja bem-vindo ' + userName )

//function soma (numA , numB) {
//    let somatorio = numA + numB
//    return somatorio
//}

function getFirstName (name){
    let firstName = name.split(" ")[0]
    return firstName

}