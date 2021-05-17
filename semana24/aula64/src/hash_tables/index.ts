export type hashTable = {
   [key: string]: any
}

const homer: hashTable = {
   name: "Homer Simpson",
   cartoon: "The Simpsons"
}

// const cartoons: hashTable[] = [homer]
//cartoons[0]

// const matrix = [
//    [1, 2],
//    [3, 4]
// ]

homer.phrase = "Moe, me vê mais uma Duff Beer!"

delete homer.name

console.log(homer);