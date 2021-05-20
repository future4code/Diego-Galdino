const exibeNumeroCrescente = (n: number) => {
    if (n >= 0) {
      exibeNumeroCrescente(n - 1);
      console.log(n);
    }
  };

  const exibeNumeroDecrescente = (n: number) => {
    if (n >= 0) {
      console.log(n);
      exibeNumeroDecrescente(n - 1);
    }
  };

  exibeNumeroCrescente(10)
  exibeNumeroDecrescente(10)