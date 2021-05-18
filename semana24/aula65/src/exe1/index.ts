const findFirstRecurringCharacter = (input:string) => {
    const charHashMap:any = {};
    for (const char of input) {
      if (charHashMap[char] === true) {
        return char;
      }
      charHashMap[char] = true;
    }
    return null;
  };

//   complexidade O(n)
  console.log(findFirstRecurringCharacter("dieghbchgvkjbnklhjgfvuo"))