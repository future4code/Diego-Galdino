// exe 1. Os resultados são - false, false, true, boolean

// exe 2 Os resultados são - undedined, null, 11, 3, [3,19,5,6,7,8,9,10,11,12,13], 9

// exe 1 a-d

let idadeUsuario = prompt("Digite sua idade")
let idadeAmigo = prompt("Digite a idade do amigo")

console.log("Sua idade é maior do que a do seu melhor amigo?",Number(idadeUsuario)>Number(idadeAmigo))
console.log(Number(idadeUsuario)-Number(idadeAmigo))

// exe 2 a-d
let par = prompt("Digite numero par")
console.log("Resto: ",Number(par)%2)
//os numeros pares o resto sempre serao 0 e impares serao sempre 1


// exe 3 a-f
let listaDeTarefas=[]
listaDeTarefas.push(prompt("Tarefa 1"))
listaDeTarefas.push(prompt("Tarefa 2"))
listaDeTarefas.push(prompt("Tarefa 3"))
console.log(listaDeTarefas)
listaDeTarefas.splice(Number(prompt("Remover tarefa 0 1 2")),1)
console.log(listaDeTarefas)

// exe 4
let emailDoUsuario = prompt("Digite seu email")
let nomeDoUsuario = prompt("Digite seu nome")

console.log("O e-mail "+ emailDoUsuario+ " foi cadastrado com sucesso. Seja bem-vinda(o), "+nomeDoUsuario+"!")

// desafio 1
console.log("Desafio 1 a. K ",(77-32)*5/9+273.15)
console.log("Desafio 1 b. F ",80*9/5+32)
console.log("Desafio 1 c. K ",30+273.15)
console.log("Desafio 1 c. F ",30*9/5+32)
let temp=Number(prompt("Temperatura em Celsius"))
console.log("Desafio 1 c. F ",temp*9/5+32)

// desafio 2

console.log("Desafio 2 a ",280*0.05)
console.log("Desafio 2 b ",(280*0.05)*0.85)


