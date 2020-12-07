// exe 1 - Inicia a variavel valor com 0 depois executa um for 5 vezes incrementando valor com o contador i exibindo no final valor 10

// exe 2 - sera exibido 19,21,23,25,27,30. Sim so acrecentar um contador para simular o indice para poder acessar cada elemento da lista[contador]

// desafio - Ele ira concatenar 0 de acordo com a entrada sera exibido 0,00,000,0000

// exe 3 - a

let arrayOriginal =[80, 30, 130, 40, 60, 21, 70, 120, 90, 103, 110, 55]

for(let c=0;c<arrayOriginal.length;c++){
    console.log(arrayOriginal[c])
}
console.log("------------------------------------")
// exe 3 - b

for(let c=0;c<arrayOriginal.length;c++){
    console.log(arrayOriginal[c]/10)
}
console.log("------------------------------------")

// exe 3 - c
let novoArray=[]
for(let c=0;c<arrayOriginal.length;c++){
    
    if(arrayOriginal[c]%2===0){
        novoArray.push(arrayOriginal[c])
    }
}
console.log(novoArray)
console.log("------------------------------------")

// exe 3 - d

let novoArrayString=[]

for(let c=0;c<arrayOriginal.length;c++){
    novoArrayString.push("O elemento do índex "+c+" é: "+arrayOriginal[c])
}

for(let item of novoArrayString){
    console.log(item)
}

console.log("------------------------------------")

let maior=arrayOriginal[0]
let menor=arrayOriginal[0]
for(let c=0;c< arrayOriginal.length;c++){
    if(arrayOriginal[c]>maior){
        maior=arrayOriginal[c]
    }
    if(arrayOriginal[c]<menor){
        menor=arrayOriginal[c]
    }
}
console.log("O maior numero é " +maior+" e o menor é "+menor)

// desafio 2

let numeroAlvo=Number(prompt("digite um numero alvo"))
console.log("Vamos jogar")
let chute=Number(prompt("digite um numero para o chute: "))
let contador=0
contador+=1
console.log("O numero chutado foi: ",chute)
while(chute!==numeroAlvo){

    if(chute>numeroAlvo){
        console.log("Digite um numero menor")
    }else {    
        console.log("Digite um numero maior")
    }
    contador+=1
    chute=Number(prompt("digite um numero para o chute: "))
    console.log("O numero chutado foi: ",chute)
}
console.log("Parabens voce acertou")
console.log("Tentativas",contador)

// desafio 3

numeroAlvo=Math.floor(Math.random()*10)
console.log("Vamos jogar")
chute=Number(prompt("digite um numero para o chute: "))
contador=0
contador+=1
console.log("O numero chutado foi: ",chute)
while(chute!==numeroAlvo){

    if(chute>numeroAlvo){
        console.log("Digite um numero menor")
    }else {    
        console.log("Digite um numero maior")
    }
    contador+=1
    chute=Number(prompt("digite um numero para o chute: "))
    console.log("O numero chutado foi: ",chute)
}
console.log("Parabens voce acertou")
console.log("Tentativas",contador)
