export const somaInteiros = (n: number): number => {
    var sum = 0
      for (var i = 0 ; i <= n ; i++) {
          sum += i;
    }
      return sum;
  }
  console.log(somaInteiros(5));