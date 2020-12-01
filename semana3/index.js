// exe 1 sera impresso 1º 10 e depois 10 5
// exe 2 sera impresso 10 10 10
// exe 1 a-e e 2
let nome;
let idade;
console.log(typeof nome,typeof idade)
// foi impresso undefined undefined porque não foi atribuido nenhum valor a elas
console.log("qual o seu nome?")
nome="diego"
console.log("qual a sua idade?")
idade=29
console.log(typeof nome,typeof idade)
// como foi atribuido valores a ela o typeof conseguiu verificar os tipos das variaveis
console.log("Ola "+nome+" voce tem "+idade+" anos")

console.log("qual o seu nome?")
nome="diego"
console.log("Ola "+nome+" voce tem "+idade+" anos")

console.log("qual a sua idade?")
idade=29
console.log("Ola "+nome+" voce tem "+idade+" anos")

console.log("qual o seu endereço?")
let end="Rua ABC, 123"
console.log("Endereço é "+end)

console.log("qual a sua cor favorita?")
let cor="azul"
console.log("Cor favorita é "+cor)

console.log("qual seu carro favorito?")
let carro="Troller"
console.log("Carro favorito é "+carro)
// exe 3 a-c

let comidas=["parmegiana", "lasanha", "escondidinho de carne seca", "churrasco", "pão de queijo"]
console.log("Comidas favoritas "+comidas[0],comidas[1],comidas[2],comidas[3],comidas[4])

comidas[2]="pizza";
console.log("Comidas favoritas "+comidas[0],comidas[1],comidas[2],comidas[3],comidas[4])
// 4
let perguntas=["tem carro? "," esta usando azul hoje? "," gosta de lasanha? "]
let respostas=[true,false,true]
console.log(perguntas[0]+respostas[0]+perguntas[1]+respostas[1]+perguntas[2]+respostas[2])
