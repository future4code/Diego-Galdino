export const exibeArray = (arr: number[], i: number = arr.length - 1) => {
    if (i >= 0) {
      exibeArray(arr, i - 1);
      console.log(`Elemento ${i}: `, arr[i]);
    }
  };
  
  const array = [10, 20, 30, 40];
  exibeArray(array);