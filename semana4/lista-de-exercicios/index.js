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

// Exercícios de Objetos

// 1 - array é um conjunto onde vc pode armazenar itens do mesmo contexto ex. array de inteiros=[2,1,3] 
// e objeto é uma estrutura que vc pode organizar e agrupar melhor as informações. ex. o objeto pessoa={nome:"Diego",idade:"29",endereco:"Rua A"}

// 2 - Crie uma função chamada criaRetangulo
// function criaRetangulo(lado1,lado2){
//     const retangulo={
//         largura: lado1,
//         altura: lado2,
//         perimetro: (lado1+lado2)*2,
//         area: lado1*lado2
//     }
//     return retangulo
// } 
// console.log(criaRetangulo(2,2))

// 3 - Crie um objeto para representar seu filme favorito.
// function criaFilme(){
//     const filmeFavorito={
//         titulo: "A Lenda do Tesouro Perdido: Livro dos Segredos", 
//         ano: 2007 , 
//         diretor:"Jon Turteltaub",
//         ator:["Nicolas Cage","Diane Kruger","Jon Voight","Justin Bartha","Helen Mirren"]
//     }
//     console.log(`Venha assistir ao filme ${filmeFavorito.titulo}, de ${filmeFavorito.ano}, dirigido por ${filmeFavorito.diretor} e estrelado por ${filmeFavorito.ator}`)
// }
// criaFilme()

// 4 - Crie um objeto que represente uma pessoa qualque
// const pessoa = {
// 	nome: "Diego Galdino",
// 	idade: 29,
// 	email: "diego@gmail.com",
// 	endereco: "Rua la perto, 5000"
// }

// function anonimizarPessoa(pessoa) {
// 	return {
// 		...pessoa,
// 		nome: "ANONIMO",
// 	}
// }

// Exercicios de array

// 1 - Considere um array com o seguinte formato: a e b
// const pessoas=[
// 	{ nome: "Pedro", idade: 20 },
// 	{ nome: "João", idade: 10 },
// 	{ nome: "Paula", idade: 12 },
// 	{ nome: "Artur", idade: 89 } 
// ]

// let adultos = pessoas.filter((pessoa)=>{
//     return pessoa.idade>=20
// })
// let criancas = pessoas.filter((pessoa)=>{
//     return pessoa.idade<20
// })
// console.log(adultos,criancas)

// 2 - Em todos os itens deste exercício, você terá que escrever uma função a b c
// const array = [1, 2, 3, 4, 5, 6]

// let dobro = array.map((item)=>{
//     return item * 2 
// })

// let triploString = array.map((item)=>{
//     return ""+item * 3+""
// })
// let parImpar = array.map((item)=>{
//     if(item%2==0){
//         return ""+item+" é par"
//     }else{
//         return ""+item+" é impar"
//     }
// })
// console.log(dobro,triploString,parImpar)

// 3 - Imagine que você trabalhe num parque a e b
// const pessoas = [
// 	{ nome: "Paula", idade: 12, altura: 1.8},
// 	{ nome: "João", idade: 20, altura: 1.3},
// 	{ nome: "Pedro", idade: 15, altura: 1.9},
// 	{ nome: "Luciano", idade: 22, altura: 1.8},
// 	{ nome: "Artur", idade: 10, altura: 1.2},
// 	{ nome: "Soter", idade: 70, altura: 1.9}
// ]

// let permitirEntrada = pessoas.filter((pessoa)=>{
//     return pessoa.altura>=1.5 && pessoa.idade>14 &&pessoa.idade<60
// })
// let naoPermitirEntrada = pessoas.filter((pessoa)=>{
//     return pessoa.altura<1.5 || pessoa.idade<14 ||pessoa.idade>60
// })
// console.log(permitirEntrada,naoPermitirEntrada)

// 4 - Você foi contratado por um escritório médico para gerar e-mails 
// const consultas = [
// 	{ nome: "João", genero: "masculino", cancelada: true, dataDaConsulta: "01/10/2019" },
// 	{ nome: "Pedro", genero: "masculino", cancelada: false, dataDaConsulta: "02/10/2019" },
// 	{ nome: "Paula", genero: "feminino", cancelada: true, dataDaConsulta: "03/11/2019" },
// 	{ nome: "Márcia", genero: "feminino", cancelada: false, dataDaConsulta: "04/11/2019" }
// ]
// let msgEmail = consultas.map((consulta)=>{
//     let mensagemCompleta
//     if(consulta.cancelada===false){
//         if(consulta.genero==="masculino"){
//             mensagemCompleta= `Ola, Sr. ${consulta.nome}. Estamos enviando esta mensagem para lembra-lo da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//         }else{
//             mensagemCompleta= `Ola, Sra. ${consulta.nome}. Estamos enviando esta mensagem para lembra-la da sua consulta no dia ${consulta.dataDaConsulta}. Por favor, acuse o recebimento deste e-mail.`
//         }
//     }else{
//         if(consulta.genero==="masculino"){
//             mensagemCompleta= `Ola, Sr. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//         }else{
//             mensagemCompleta= `Ola, Sra. ${consulta.nome}. Infelizmente, sua consulta marcada para o dia ${consulta.dataDaConsulta} foi cancelada. Se quiser, pode entrar em contato conosco para remarcá-la`
//         }
//     }
//     return mensagemCompleta
// })
// console.log(msgEmail)

// 5 - Agora, pediram para você ajudar a fazer uma funcionalidade de um banco digital.

// const contas = [
// 	{ cliente: "João", saldoTotal: 1000, compras: [100, 200, 300] },
// 	{ cliente: "Paula", saldoTotal: 7500, compras: [200, 1040] },
// 	{ cliente: "Pedro", saldoTotal: 10000, compras: [5140, 6100, 100, 2000] },
// 	{ cliente: "Luciano", saldoTotal: 100, compras: [100, 200, 1700] },
// 	{ cliente: "Artur", saldoTotal: 1800, compras: [200, 300] },
// 	{ cliente: "Soter", saldoTotal: 1200, compras: [] }
// ]
// contas.forEach((conta)=>{
//     let somaCompras=0
//     conta.compras.map((compra)=>{
//         somaCompras+=compra
//     })
//     conta.saldoTotal-=somaCompras
// })
// console.log(contas)