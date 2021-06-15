export const somaInteiros = (n: number, acc: number = 0): number => {
    if (n === 0) {
      return acc;
    }
    return somaInteiros(n - 1, acc + n);
  };

  console.log(somaInteiros(5));