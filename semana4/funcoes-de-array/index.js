let arrDespesas = [{descricao: "Pão",tipo: "alimentação",valor: 10},
                    {descricao: "a",tipo: "alimentação",valor: 5},
                    {descricao: "c",tipo: "alimentação",valor: 15},
                    {descricao: "Pão",tipo: "utilidades",valor: 10},
                    {descricao: "a",tipo: "utilidades",valor: 5},
                    {descricao: "c",tipo: "utilidades",valor: 15},
                    {descricao: "Pão",tipo: "viagem",valor: 10},
                    {descricao: "a",tipo: "viagem",valor: 5},
                    {descricao: "c",tipo: "viagem",valor: 15}]
imprimirDespesas(arrDespesas)
imprimirExtrato()


// PRIMEIRO
function imprimirDespesas(despesas){
    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'
    
    // AQUI VEM A IMPLEMENTAÇÃO
    despesas.forEach((despesa,indice,array) => {
        divDespesas.innerHTML += `<p><li>valor: R$${despesa.valor} | tipo: ${despesa.tipo} | descrição: ${despesa.descricao}</li></p>`
    });
}


// SEGUNDO 
function imprimirExtrato(){
    let divExtrato = document.getElementById('extrato')
    let gastoTotal = 0
    let gastoAlimentacao = 0
    let gastoUtilidades = 0
    let gastoViagem = 0


    // AQUI VEM A IMPLEMENTAÇÃO
    arrDespesas.forEach((despesa,indice,array)=>{
        if(despesa.tipo==="alimentação"){
            gastoAlimentacao+=despesa.valor
            gastoTotal+=despesa.valor
        }
        if(despesa.tipo==="utilidades"){
            gastoUtilidades+=despesa.valor
            gastoTotal+=despesa.valor
        }
        if(despesa.tipo==="viagem"){
            gastoViagem+=despesa.valor
            gastoTotal+=despesa.valor
        }
    })

    divExtrato.innerHTML = `<p>Extrato: Gasto Total: R$${gastoTotal} | Alimentação: R$${gastoAlimentacao} | 
                                        Utilidades: R$${gastoUtilidades} | Viagem: R$${gastoViagem}</p>`
}


function limparFiltros() {
    document.getElementById('tipoFiltro').value = ""
    document.getElementById('valorFiltroMin').value = ""
    document.getElementById('valorFiltroMax').value = ""
}



function adicionarDespesa(){
    let valorCdt = document.getElementById('valorCadastro')
    let tipoCtd = document.getElementById('tipoCadastro')
    let descricaoCtd = document.getElementById('descricaoCadastro')

    if(validarValor(valorCdt) && validarTipo(tipoCtd) && validarDescricao(descricaoCtd)){
        let novaDespesa = {
            valor: Number(valorCdt.value),
            tipo: tipoCtd.value,
            descricao: descricaoCtd.value,
        }

        arrDespesas.push(novaDespesa)
        
        valorCdt.value = ""
        tipoCtd.value = ""
        descricaoCtd.value = ""

        
        limparFiltros()
        imprimirDespesas(arrDespesas)
        imprimirExtrato()
    } else {
        alert("`Faltou algum valor ou algum valor é um número negativo`")
    }
}



// TERCEIRO
function filtrarDespesas(){
    let tipoFiltro = document.getElementById('tipoFiltro').value
    let valorMin = Number(document.getElementById('valorFiltroMin').value)
    let valorMax = Number(document.getElementById('valorFiltroMax').value)
    let despesasFiltradasTodas
    let despesasFiltradasAlimentacao
    let despesasFiltradasUtilidade
    let despesasFiltradasViagem

    if(tipoFiltro!=="" && validarValorFiltrar(valorMin) && validarValorFiltrar(valorMax)){
        if(tipoFiltro==="todos"){
            despesasFiltradasTodas = arrDespesas.filter((despesa,indice,array)=>{  // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO 
            if(despesa.valor>=valorMin && despesa.valor<=valorMax) return true })
            imprimirDespesas(despesasFiltradasTodas)
        }
        if(tipoFiltro==="alimentação"){
   
            despesasFiltradasAlimentacao = arrDespesas.filter((despesa,indice,array)=>{  // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO 
            if(despesa.tipo==="alimentação"&& despesa.valor>=valorMin && despesa.valor<=valorMax) return true })
            console.log(despesasFiltradasAlimentacao)
            imprimirDespesas(despesasFiltradasAlimentacao)
        }
        if(tipoFiltro==="utilidades"){
            despesasFiltradasUtilidade = arrDespesas.filter((despesa,indice,array)=>{  // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO 
            if(despesa.tipo==="utilidades"&& despesa.valor>=valorMin && despesa.valor<=valorMax) return true })
            imprimirDespesas(despesasFiltradasUtilidade)
        }
        if(tipoFiltro==="viagem"){
            despesasFiltradasViagem = arrDespesas.filter((despesa,indice,array)=>{  // AQUI NESSA VARIÁVEL VEM A IMPLEMENTAÇÃO 
            if(despesa.tipo==="viagem"&& despesa.valor>=valorMin && despesa.valor<=valorMax) return true })
            imprimirDespesas(despesasFiltradasViagem)
        }
        
    
    }else{
        alert("Digite todos os campos")
    }
}


// desafio 1 validar

function validarValorFiltrar(valor){
    if(valor>0){return true}else{return false}
}
// desafio 2 

function listarDecrecente(){

    let divDespesas = document.getElementById('despesas')
    divDespesas.innerHTML = '<p><u>Despesas Detalhadas</u></p>'

    arrDespesas.sort()
    console.log(arrDespesas)
    arrDespesas.forEach((despesa,indice,array) => {
        divDespesas.innerHTML += `<p><li>valor: R$${despesa.valor} | tipo: ${despesa.tipo} | descrição: ${despesa.descricao}</li></p>`
    });
}



// FunÇoes que fazem validaÇoes dos inputs de criaÇao de despesas 

// NÃO SE PREOCUPEM EM ENTENDER ESSAS FUNÇÕES

function validarValor(valor){
    if(valor.value.length > 0 && parseInt(valor.value) > 0){
        return true
    }
    return false
}

function validarTipo(tipo){
    if(tipo.value !== ""){
        return true
    }
    return false
}

function validarDescricao(texto){
    if(texto.value.replace(/ /g,"").length !== 0){
        return true
    }
    return false
}