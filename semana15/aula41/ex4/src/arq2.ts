type Estatisticas={
    maior: number,
    menor: number,
    media: number
}


function obterEstatisticas(numeros:Array<number>) {

    const numerosOrdenados:Array<number> = numeros.sort(
        (a, b) => a - b
    )

    let soma:number= 0

    for (let num of numeros) {
        soma += num
    }

    const estatisticas:Estatisticas= {
        maior: numerosOrdenados[numeros.length - 1],
        menor: numerosOrdenados[0],
        media: (soma / numeros.length)
    }

    return estatisticas
}

type AmostraDeIdades ={
    numeros:Array<number>,
    obterEstatisticas:Function
}

const valor: AmostraDeIdades={
    numeros:[21, 18, 65, 44, 15, 18],
    obterEstatisticas
}

console.log(valor.obterEstatisticas(valor.numeros))

//entrada array de numeros e saida objeto estatisticas