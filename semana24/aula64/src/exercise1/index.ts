/**
 * PROBLEMA:
 *    Determinar se uma string é um palíndromo
 * 
 * IO:
 *    "Bob" -> true
 *    "Bobo" -> false
 *    "A dama admirou o rím da amada"
 * 
 * ALGORITMO:
 *    'normalizar' a string (tirar os espaços, maiúsculas, acentuação, etc?)
 *    inverter a ordem dos caracteres
 *    comparar com o original
 */

const checkPalindrome = (
   text: string
): boolean => {

   const normalize = (text: string) => { 
      return text
      .replace(/íì/g, "i")
      .replace(/[^a-zA-z]/g, "")
      .toLowerCase()
   }
   const reverseCharacters = (text: string) => { 
      return text
         .split("")  // "banana" -> ["b", "a", "n", "a", "n", "a"]
         .reverse()
         .join("")
   }

   const normalizedText = normalize(text)

   const reversedString = reverseCharacters(normalizedText)

   return reversedString === normalizedText
}

console.log(checkPalindrome("abcba"));
console.log(checkPalindrome("abca"));
console.log(checkPalindrome("A dama admirou o rím da amada"));
