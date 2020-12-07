// exe 1 a - b  aparecera 10 50 e sem o console log iria executar a função porem nao iria exibir

// exe 2 a - b  saidas Darvas e Caio, sairia Amanda e Caio

// exe 3  A função dobrarPares contem um for que percorre o array verificando se o resto da divisão por 2 é 0, se for multiplica o item por ele mesmo

// exe 4 a e b

// exibirMinhaInformacao()
// function exibirMinhaInformacao(){
//     console.log("Eu sou Diego, tenho 29 anos, moro em Guarujá - SP e sou estudante")
// }

// let nome=prompt("Nome"),idade=prompt("Idade"),endereco=prompt("endereco"),estudante=prompt("S / N")
// exibirInformacaoPessoal(nome,idade,endereco,estudante)
// function exibirInformacaoPessoal(nome,idade,endereco,estudante){
//     console.log("Eu sou "+nome+", tenho "+idade+" anos, moro em "+endereco+" e sou estudante "+estudante)
// }

// exe 5 a e b 

// somaNumeros(2,3)
// function somaNumeros(n1,n2){
//     console.log(Number(n1)+Number(n2))
//     return Number(n1)+Number(n2)
// }
// console.log(verificaMaior(5,2))
// function verificaMaior(n1,n2){
//     if(n1>=n2){
//         return true
//     }else{
//         false
//     }

// }

// repeteDez("Diego Galdino")
// function repeteDez(frase){
//     for(let c = 0; c < 10; c++){
//         console.log(frase)
//     }
// }





// exe 6 a, b e c

// const array = [10, 23, 45, 78, 90, 52, 35, 67, 84, 22]


// console.log(tamanhoArray(array))
// function tamanhoArray(array){
//     return array.length
// }

// console.log(ePar(2))
// function ePar(num){
//     if(num%2===0){
//         return true}else{return false}
// }
      
// console.log(quantosPares(array))
// function quantosPares(array){
//     let pares=0
//     for(item of array){
//         if(item%2===0)
//         pares++
//     }
//     return pares
// }


// console.log(quantosParesComFuncao(array))
// function quantosParesComFuncao(array){
//     let pares=0
//     for(item of array){
//         if(ePar(item))
//         pares++
//     }
//     return pares
// }



// desafio 1 a d
// let exibeNum=(n)=>{console.log(n)}
// exibeNum(2)

// let somaNum=(n1,n2)=>{
//     exibeNum(n1+n2)
// }
// somaNum(2,4)


const numeros = [0, 8, 23, 16, 10, 15, 41, 12, 13]

let retornaPares=(numeros)=>{
    let array=[]
    for (item of numeros) {
        if(item%2===0){}
        array.push(item*2)
    }
    return array
}
let retornaMaior=(numeros)=>{
    let maior=numeros[0]
    for (item of numeros) {
        if(item>maior){
            maior=item
        }
    }
    return maior
}
let retornaIndiceMaior=(numeros)=>{
    let indice=0,maior=numeros[0]
    for(let c = 0 ; c < numeros.length;c++){
        if(numeros[c]>maior){
            maior=numeros[c]
            indice=c
        }
    }
    return indice
}

let retornaArrayInvertido=(numeros)=>{
    let arrayInvertido=[]
    for(let c =numeros.length-1; c!==0;c--){
        arrayInvertido.push(numeros[c])
    }
    return arrayInvertido
}


console.log(retornaPares(numeros))
console.log(retornaMaior(numeros))
console.log(retornaIndiceMaior(numeros))
console.log(retornaArrayInvertido(numeros))