let resultNuber = calcRank( 120, 9)
let rank
if (resultNuber >= 101){
    rank = "Imortal"
}
else if(resultNuber > 90)  {
    rank = "Lendário"
}
else if(resultNuber > 80){
    rank = "Diamante"
}
else if (resultNuber > 50){
    rank = "Ouro"
}
else if( resultNuber > 20){
    rank ="Prata"
}
else if (resultNuber > 9){
    rank = "Bronze"
}

else{
    rank = "Ferro"
}
console.log("O Herói tem o saldo de " + resultNuber + " e está no nível " + rank)

function calcRank (victorys, loses){
    let result = victorys - loses
    return result
}