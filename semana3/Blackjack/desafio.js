/**
 * EXEMPLO DE UTILIZAÇÃO DA 'comprarCarta'
 * 
 * 
    const carta = comprarCarta(); // Sorteia uma carta. Por exemplo, o rei de ouros
    
    console.log(carta.texto) // imprime o texto da carta. Exemplo: "K♦️" (indica "K" de ouros)
    console.log(carta.valor) // imprime o valor da carta (um número). Exemplo: 10 (dado que "K" vale 10)
 * 
 * 
 * 
 */


console.log("Bem vindo ao jogo Balckjack!")

   let usuario=[]
   let computador=[]
   let somaUsuario=0
   let somaComputador=0
   let cartaUsuario 
   let cartaComputador
   let contadorFinal=2
   let exibir =false

   for(let c=0; c<contadorFinal;c++){
      cartaUsuario = comprarCarta()
      cartaComputador = comprarCarta()

      if(cartaComputador.valor===cartaUsuario.valor){
         console.log("Cartas iguais, sorteio novamente")
         contadorFinal+=1
      }else{
         somaUsuario+=cartaUsuario.valor
         usuario.push(" "+cartaUsuario.texto+" ")

         somaComputador+=cartaComputador.valor
         computador.push(" "+cartaComputador.texto+" ")
      }
      console.log("passo for "+c)
   }
   console.log("saiu do for ")
   
   while(somaUsuario<=21||somaComputador<=21){
      console.log("entrou no while")
      if(confirm("Suas cartas são "+usuario+" A carta revelada do computador é "+computador[0]+" \nDeseja comprar mais uma carta?")){
         console.log("entrou no confirm")

         cartaUsuario = comprarCarta()
         somaUsuario+=cartaUsuario.valor
         usuario.push(" "+cartaUsuario.texto+" ")
         
         cartaComputador = comprarCarta()
         somaComputador+=cartaComputador.valor
         computador.push(" "+cartaComputador.texto+" ")

         console.log(usuario,computador,somaUsuario,somaComputador)
         
      }else{
         exibir=true
         console.log("entrou no else confirm")
         if(somaUsuario===somaComputador){
            alert("Deu empate")
         }else if(somaComputador>somaUsuario){
            alert("Suas cartas são "+usuario+" .Sua pontuação é: "+somaUsuario+" \nAs cartas do computador são "+computador+" . A pontuação dele é: "+somaComputador+"\nO Computador ganhou")
            console.log("Computador venceu")
         } else{
            alert("Suas cartas são "+usuario+" .Sua pontuação é: "+somaUsuario+" \nAs cartas do computador são "+computador+" . A pontuação dele é: "+somaComputador+"\nO Usuario ganhou")
            console.log("Usuario venceu")
         }
         break
      }
   }
   if(exibir===false){
      if(somaUsuario===somaComputador){
         alert("Deu empate")
      }else if(somaComputador>somaUsuario){
         alert("Suas cartas são "+usuario+" .Sua pontuação é: "+somaUsuario+" \nAs cartas do computador são "+computador+" . A pontuação dele é: "+somaComputador+"\nO Computador ganhou")
         console.log("Computador venceu")
      } else{
         alert("Suas cartas são "+usuario+" .Sua pontuação é: "+somaUsuario+" \nAs cartas do computador são "+computador+" . A pontuação dele é: "+somaComputador+"\nO Usuario ganhou")
         console.log("Usuario venceu")
      }
   }
console.log("O jogo acabou")

