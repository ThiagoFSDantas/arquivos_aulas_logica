// ao chamar uma função, se na função tem uma declaração de varivel , é o que está entre os parentizes, neste caso a
// a variavel se chama "pao". quando chamar a a função e colocar entre parenzies uma informaão, esta será atribuida ao valor
//da variavel.

torrar('pão de forma')
torrar('pão integral')
function torrar(pao){
    console.log("torrada feita com " + pao)
}

//cara colocar mais de uma variavel na função, só separe por virgula
torrar('pão de forma ' , 'Tette')
torrar('pão integral ' , "JC Matteo")
function torrar(pao , nome){
    console.log("torrada feita com " + pao)
    console.log("essa torrada é da " + nome)
}

// fução com parametro

