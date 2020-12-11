// Exercícios de interpretação de código

// 1 - A função conversorDeMoeda espera receber como parametro um valor, 
// onde dentro da função a variavel cotação recebe do usuario o valor da cotação do dolar.
// E retorna a multiplicação da cotacao com o valor recebido via parametro e concatenando o R$
// é criada uma const que recebe o retorno da função conversorDeMoeda e logo apos é exibida no console.log 
// dolar 100 cotação 5,08 console.log 507,78

// 2 - A função investeDinheiro espera receber como parametro o tipoDeinvestimento e um valor
// cria uma variavel valorAposInvestimento
// Escolhe um investimento atraves do switch passando a variavel tipoDeinvestimento
// E retornando o valorAposInvestimento recebendo a multiplicação de valor com uma porcentagem
// e se o tipoDeinvestimento não for nenhum dos esperados retorna investimento incorreto
// é criado 2 const que recebe o resultado da investeDinheiro e exibido os resultados
// que são novoMontante 165 segundoMontante "Tipo de investimento informado incorreto"

// 3 - é criado 3 arrays numeros array1 e array2 onde numeros ja contem valores
// dentro de uma estrutura de repetição for é separado os numeros entre pares e impares do array numeros
// e armazendo os pares em array1 e impares no array2
// no final exibe o total de numeros do array numeros, depois o total de pares e impares 

// 4 - é criado 1 array numeros e duas variaveis numero1 e numero2 todos com valores iniciados
// executa um for of verificando se o item do array numeros é maior ou menor e armazenando em numero1 e numero2 respectivamente
// logo apos exibindo menor -10 e maior 1590

// Exercícios de Lógica de Programação

// 1 - Cite 3 maneiras de se percorrer/iterar uma lista. Faça um programa para exemplificar.
// let array=[2,8,5,4,7,9,2,5,7,5]
// for(let c=0;c<10;c++){
//     console.log(array[c])
// }
// for(let num of array){
//     console.log(num)
// }
// array.forEach((item)=>{
//     console.log(item)
// })

// 2 - Para este exercício considere as seguintes variáveis:
// a-false, b-false, c-true, d-true, e-false

// 3 - Você tem que escrever um código que, dado um número N, ele imprima (no console) 
// os N primeiros números pares (por exemplo, se N for 3, você deve imprimir 0, 2 e 4; se N for 5, deve imprimir 0, 2, 4, 6 e 8).
// const quantidadeDeNumerosPares=3
// let i = 0
// while(i < quantidadeDeNumerosPares) {
//   console.log(i*2)
//   i++
// }
// primeiro a const necessita iniciar com um valor, depois a pegadinha do loop infinito haha, 
// depois é so adicionar o incremento no i i++ e tirar o = da condição do for

// 4 - Faça uma função que receba como parâmetro os tamanhos dos três lados do triângulo: a, b, c  e retorne se ele é equilátero, isósceles ou escaleno.
// function resTriangulo(l1,l2,l3){
//     if(l1 === l2 && l1 === l3 && l2 === l3){    return "Equilátero"}
//     if(l1 !== l2 && l1 !== l3 && l2 !== l3){    return "Escaleno"}
//     if(l1 === l2 && l1 !== l3 ){ return "Isósceles"}
//     if(l1 === l3 && l2 !== l3 ){ return "Isósceles"}
//     if(l2 === l3 && l1 !== l3 ){ return "Isósceles"}
// }
// console.log(resTriangulo(1,3,3))
// console.log(resTriangulo(1,1,3))
// console.log(resTriangulo(3,1,3))
// console.log(resTriangulo(3,3,3))
// console.log(resTriangulo(2,1,3))

// 5 - i. indique qual é o maior,
// ii. determine se eles são divisíveis um pelo outro (use o operador %) e
// iii. determine a diferença entre eles (o resultado deve ser um número positivo sempre)
// let valor1=15
// let valor2=30
// let maior
// let menor
// if(valor1>=valor2){
//     console.log("O maior é",valor1)
//     maior=valor1
//     menor=valor2
// }else{
//     console.log("O maior é",valor2)
//     maior=valor2
//     menor=valor1
// }
// if(valor1%valor2===0){
//     console.log(valor1," é divisivel por ",valor2)
// }else{
//     console.log(valor1," não é divisivel por ",valor2)
// }
// if(valor2%valor1===0){
//     console.log(valor2," é divisivel por ",valor1)
// }else{
//     console.log(valor2," não é divisivel por ",valor1)
// }
// console.log("A diferença entre eles é ",maior-menor)


// Exercícios de Funções

// 1 - Escreva uma função que receba um array de números e imprima na tela o segundo maior e o segundo menor número. 
// Em seguida, invoque essa função. (Não é permitido usar funções de ordenação de vetores.)
// let arrayNumeros =[10,20,30,22,11,9,99,8,48,56,23,44,12,66,65,33,5,88,84,77]
// function maiorMenor(numeros){
//     let aux
//     for(let c=0; c<numeros.length;c++){
//         for(let i=c+1;i<numeros.length;i++){
//             if(numeros[c]>numeros[i]){
//                 aux=numeros[c]
//                 numeros[c]=numeros[i]
//                 numeros[i]=aux
//             }
//         }
//     }
//     console.log(numeros)
//     console.log("segundo maior",numeros[numeros.length-2],"segundo menor",numeros[1])
// }
// maiorMenor(arrayNumeros)

// 2 - Escreva uma função não nomeada que faça um alert("Hello Labenu!");. Em seguida, invoque essa função.
// let mostrarNaTela = function(){
//     alert("Hello Labenu")
// }
// mostrarNaTela()