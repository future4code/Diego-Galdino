//acessamos os parametros via metodo process.argv
if(process.argv[2] && process.argv[3]){
    console.log("Olá, "+process.argv[2]+"! Você tem "+process.argv[3]+" anos.")
    console.log("Olá, "+process.argv[2]+"! Você tem "+process.argv[3]+" anos. Em sete anos você terá "+(Number(process.argv[3])+7))
}else{console.log("esperava 2 parametros")}