export const qtdeDigitos = (num: number, acc: number = 1): number => {
    if (num < 10) {
      return acc;
    }
    return qtdeDigitos(num / 10, acc + 1);
  };
  
  console.log(qtdeDigitos(1));
  console.log(qtdeDigitos(10));
  console.log(qtdeDigitos(100));
  console.log(qtdeDigitos(1000));