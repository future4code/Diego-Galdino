// exe 1 - Recebe do usuario um valor que é convertido para numero e verifica o resto da divisao é 0.
// se sim exibe Passou caso contrario exibe nao passou

// exe 2 - serve para a pessoa escolher uma fruta e saber o preço da mesma
// O preço da fruta Maçã é R$2.25
// Ele considera tudo o que vem apos se tirarmos o break com isso o preço da pera fica RS 5

// exe 3 - numero esta recebendo via teclado ja convertido para Number
// Com o numero 10 ele entra dentro do if executa o console.log e cria e armazena uma mensagem em mensagem
// Com o -10 ele não entra no if e tenta exibir mensagem.
// E como mensagem só foi declarado dentro do if a exibição da msg fora do if na ultima linha sempre vai gerar o erro "is not defined"

// exe 4

let idade=Number(prompt("Digite sua idade"))
if(idade>=18){
    console.log("Você pode dirigir")
}else{
    console.log("Você não pode dirigir")
}

// exe 5

let turno=prompt("Digite seu turno M V N")
if(turno==="M"){
    console.log("Bom dia!")
}else if(turno==="V"){
    console.log("Boa Tarde")
}else{
    console.log("Boa Noite")
}

// exe 6

let turno=prompt("Digite seu turno M V N")
switch (turno){
    case 'M','m':console.log("Bom dia!"); break;
    case 'V','v':console.log("Boa Tarde!"); break;
    case 'N','n':console.log("Boa Noite!"); break;
    default:console.log("Digite um turno valido"); break;
}


// exe 7

let genero=prompt("Digite o genero Fantasia ou outro F ou O")
let preco=15
if((genero==="F") &&(preco<=15)){
    console.log("Bom filme!")
}else{
    console.log("Escolha outro filme :(")
}

// desafio 1

let genero=prompt("Digite o genero Fantasia ou outro F ou O")
let preco=15
if((genero==="F") &&(preco<=15)){

    let snack=prompt("Digite o que vc quer Pipoca Chocolate Doces P C D")
    switch (turno){
        case 'P','p':console.log("Bom filme com Pipoca"); break;
        case 'C','c':console.log("Bom filme com Chocolate"); break;
        case 'D','d':console.log("Bom filme com doces"); break;
    }
}else{
    console.log("Escolha outro filme :(")
}

// desafio 2

let nome = prompt("Nome completo")
let tipoDoJogo = prompt("Tipo do jogo IN ou DO")
let etapaDoJogo = prompt("Etapa do jogo SF, DT ou FI")
let categoria =Number(prompt("Categoria do jogo 1 - 4"))
let ingresso =Number(prompt("Qtd ingresso"))

if(tipoDoJogo==="DO"){
    if(etapaDoJogo==="SF"){

        console.log("------Dados da compra------")
        console.log("Nome: ",nome)
        console.log("Tipo do jogo: ",tipoDoJogo)
        console.log("Etapa do jogo: ",etapaDoJogo)
        console.log("categoria: ",categoria)
        console.log("Qtd ingressod: ",ingresso)
        console.log("----------Valores----------")

        switch (categoria){
            case 1: 
                console.log("Valor do ingresso: R$ 1320")
                console.log("Valor do Total: R$ ",ingresso*1320)
            break;
            case 2: 
                console.log("Valor do ingresso: R$ 880")
                console.log("Valor do Total: R$ ",ingresso*880)
            break;
            case 3: 
                console.log("Valor do ingresso: R$ 550")
                console.log("Valor do Total: R$ ",ingresso*550)
            break;
            case 4: 
                console.log("Valor do ingresso: R$ 220")
                console.log("Valor do Total: R$ ",ingresso*220)
            break;
        }

    }else if(etapaDoJogo==="DT"){
        console.log("------Dados da compra------")
        console.log("Nome: ",nome)
        console.log("Tipo do jogo: ",tipoDoJogo)
        console.log("Etapa do jogo: ",etapaDoJogo)
        console.log("categoria: ",categoria)
        console.log("Qtd ingressod: ",ingresso)
        console.log("----------Valores----------")

        switch (categoria){
            case 1: 
                console.log("Valor do ingresso: R$ 660")
                console.log("Valor do Total: R$ ",ingresso*660)
            break;
            case 2: 
                console.log("Valor do ingresso: R$ 440")
                console.log("Valor do Total: R$ ",ingresso*440)
            break;
            case 3: 
                console.log("Valor do ingresso: R$ 330")
                console.log("Valor do Total: R$ ",ingresso*330)
            break;
            case 4: 
                console.log("Valor do ingresso: R$ 170")
                console.log("Valor do Total: R$ ",ingresso*170)
            break;
        }

    }else{
        
        console.log("------Dados da compra------")
        console.log("Nome: ",nome)
        console.log("Tipo do jogo: ",tipoDoJogo)
        console.log("Etapa do jogo: ",etapaDoJogo)
        console.log("categoria: ",categoria)
        console.log("Qtd ingressod: ",ingresso)
        console.log("----------Valores----------")

        switch (categoria){
            case 1: 
                console.log("Valor do ingresso: R$ 1980")
                console.log("Valor do Total: R$ ",ingresso*1980)
            break;
            case 2: 
                console.log("Valor do ingresso: R$ 1320")
                console.log("Valor do Total: R$ ",ingresso*1320)
            break;
            case 3: 
                console.log("Valor do ingresso: R$ 880")
                console.log("Valor do Total: R$ ",ingresso*880)
            break;
            case 4: 
                console.log("Valor do ingresso: R$ 330")
                console.log("Valor do Total: R$ ",ingresso*330)
            break;
        }

    }
}else{
    if(etapaDoJogo==="SF"){

        console.log("------Dados da compra------")
        console.log("Nome: ",nome)
        console.log("Tipo do jogo: ",tipoDoJogo)
        console.log("Etapa do jogo: ",etapaDoJogo)
        console.log("categoria: ",categoria)
        console.log("Qtd ingressod: ",ingresso)
        console.log("----------Valores----------")

        switch (categoria){
            case 1: 
                console.log("Valor do ingresso: U$ ",1320/4.10)
                console.log("Valor do Total: U$ ",(ingresso*1320)/4.10)
            break;
            case 2: 
                console.log("Valor do ingresso: U$ ",880/4.10)
                console.log("Valor do Total: U$ ",(ingresso*880)/4.10)
            break;
            case 3: 
                console.log("Valor do ingresso: U$ ",550/4.10)
                console.log("Valor do Total: U$ ",(ingresso*550)/4.10)
            break;
            case 4: 
                console.log("Valor do ingresso: U$ ",220/4.10)
                console.log("Valor do Total: U$ ",(ingresso*220)/4.10)
            break;
        }

    }else if(etapaDoJogo==="DT"){
        console.log("------Dados da compra------")
        console.log("Nome: ",nome)
        console.log("Tipo do jogo: ",tipoDoJogo)
        console.log("Etapa do jogo: ",etapaDoJogo)
        console.log("categoria: ",categoria)
        console.log("Qtd ingressod: ",ingresso)
        console.log("----------Valores----------")

        switch (categoria){
            case 1: 
                console.log("Valor do ingresso: U$ ",660/4.10)
                console.log("Valor do Total: U$ ",(ingresso*660)/4.10)
            break;
            case 2: 
                console.log("Valor do ingresso: U$ ",440/4.10)
                console.log("Valor do Total: U$ ",(ingresso*440)/4.10)
            break;
            case 3: 
                console.log("Valor do ingresso: U$ ",330/4.10)
                console.log("Valor do Total: U$ ",(ingresso*330)/4.10)
            break;
            case 4: 
                console.log("Valor do ingresso: U$ ",170/4.10)
                console.log("Valor do Total: U$ ",(ingresso*170)/4.10)
            break;
        }

    }else{
        
        console.log("------Dados da compra------")
        console.log("Nome: ",nome)
        console.log("Tipo do jogo: ",tipoDoJogo)
        console.log("Etapa do jogo: ",etapaDoJogo)
        console.log("categoria: ",categoria)
        console.log("Qtd ingressod: ",ingresso)
        console.log("----------Valores----------")

        switch (categoria){
            case 1: 
                console.log("Valor do ingresso: U$ ",1980/4.10)
                console.log("Valor do Total: U$ ",(ingresso*1980)/4.10)
            break;
            case 2: 
                console.log("Valor do ingresso: U$ ",1320/4.10)
                console.log("Valor do Total: U$ ",(ingresso*1320)/4.10)
            break;
            case 3: 
                console.log("Valor do ingresso: U$ ",880/4.10)
                console.log("Valor do Total: U$ ",(ingresso*880)/4.10)
            break;
            case 4: 
                console.log("Valor do ingresso: U$ ",3320/4.10)
                console.log("Valor do Total: U$ ",(ingresso*330)/4.10)
            break;
        }

    }
}
