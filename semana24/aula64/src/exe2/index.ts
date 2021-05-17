const compressao = (input:string) => {
    const substrings = [];
    let lastChar = input[0];
    let charCount = 0;

    for (const char of input) {
        if (char !== lastChar) {
            substrings.push(lastChar + charCount);
            lastChar = char;
            charCount = 0;
        }
        charCount++;
    }

    substrings.push(lastChar + charCount);
    let result = "";
    for (const key of substrings) {
        result += key;
    }

    return result.length > input.length ? input : result;
}

console.log(compressao("aabbb"))
console.log(compressao("aabcccccaaa"))
console.log(compressao("accurate"))
console.log(compressao("a1c2u1r1a1t1e1"))
console.log(compressao("escola"))
console.log(compressao("e1s1c1o1l1a1"))
console.log(compressao("accuraaaaaaaaaate"))