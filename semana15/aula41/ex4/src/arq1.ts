
//const minhaString: string
//Type 'number' is not assignable to type 'string'
// const minhaString:string =0


const meuNumero: number=1
enum CORES{VERMELHO="VERMELHO",LARANJA="LARANJA",AMARELO="AMARELO",VERDE="VERDE",AZUL="AZUL",ANIL="ANIL",VIOLETA="VIOLETA"}
const pessoa:{nome:string,idade:number,corFavorita:string}={nome:"diego",idade:29,corFavorita:"azul"}
type Pessoa={nome:string,idade:number,corFavorita:string}
const p1:Pessoa={nome:"diego",idade:29,corFavorita:CORES.AZUL}
const p2:Pessoa={nome:"diego1",idade:25,corFavorita:CORES.VERMELHO}
const p3:Pessoa={nome:"diego2",idade:32,corFavorita:CORES.VERDE}
console.log(p1)