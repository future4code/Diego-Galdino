function verifyIfExistRepeatedNumbers(listOfNumbers: number[]): boolean {
    for (let i = 0; i < listOfNumbers.length; i++) {
      if (listOfNumbers.indexOf(listOfNumbers[i]) !== i) {
        return true;
      }
    }
    return false;
  }
  //   complexidade O(n²)

  console.log(verifyIfExistRepeatedNumbers([1,3,5,2,3,34,36,3552,2,1,2,9,2,23,]))