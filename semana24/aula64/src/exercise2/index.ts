/**
 *    PROBLEMA:
 *       Determinar se duas string são anagramas uma da outra
 * 
 *    IO:
 *       "banana" e "aaabnn" -> true
 *       "Marcelo" e "mâr e loc" -> true
 *       "Pato" e "opta" -> true
 *       "Matt" e "mata" -> false
 * 
 *    ALGORITMO:
 *       (otimização) comparar os tamanhos
 *       'normalizar' as strings
 *       ordenar os caracteres alfabeticamente (alternativa: 'catalogar' os caracteres)
 *       comparar
 */

import { hashTable } from "../hash_tables"

const checkAnagrams = (
   firstText: string,
   secondText: string
): boolean => {

   const normalize = (text: string) => {
      return text
         .replace(/íì/g, "i")
         .replace(/áàâã/g, "a")
         .replace(/[^a-zA-z]/g, "")
         .toLowerCase()
   }

   // const sortCharacters = (text: string): string => {
   //    return text
   //       .split("")
   //       .sort()
   //       .join("")
   // }

   const indexCharacters = (text: string): hashTable => {
      const result:hashTable = {}

      for (let character of text) {
         if (result[character])
            result[character]++
         else
            result[character] = 1
      }

      return result
   }
   

   firstText = normalize(firstText)
   secondText = normalize(secondText)

   if (firstText.length !== secondText.length)
      return false

   // firstText = sortCharacters(firstText)
   // secondText = sortCharacters(secondText)

   const firstTextLetters:hashTable = indexCharacters(firstText)
   const secondTextLetters:hashTable = indexCharacters(secondText)

   // return firstText === secondText

   for(let key in firstTextLetters){
      if(firstTextLetters[key] !== secondTextLetters[key])
         return false
   }

   for(let key in secondTextLetters){
      if(firstTextLetters[key] !== secondTextLetters[key])
         return false
   }

   return true
}

console.log(checkAnagrams("banana", "aaabnn"));
console.log(checkAnagrams("Marcelo", "mar e loc"));
console.log(checkAnagrams("Pato", "opta"));
console.log(checkAnagrams("Matt", "mata"));
