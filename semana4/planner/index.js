
function criarTarefa(){
    let tarefa="",campoTarefa = document.getElementById("tarefa")
    tarefa=campoTarefa.value

    let dia="",campoDia = document.getElementById("dias-semana")
    dia=campoDia.value
    
    
    if(campoTarefa.value!==""){
        let divTarefa = document.getElementById(dia)
        divTarefa.innerHTML+=`<div class='item'>${tarefa}</div>`
        campoTarefa.value=""
    }else{
        alert("Informe alguma tarefa")
    }
}

function zerarTarefas(){
    arrayDias=["domingo","segunda","terca","quarta","quinta","sexta","sabado"]
    if(confirm("Tem certeza que deseja excluir todas as tarefas"))
    for(let c = 0;c<7;c++){
        document.getElementById(arrayDias[c]).innerHTML=""
    }
}

const itemLista = document.getElementById("container-tarefa")
itemLista.addEventListener("click",riscarTarefa)

function riscarTarefa(e){
    console.log(e.target)
    if(e.target.classList.contains('item')){
        e.target.classList.toggle("item-riscado")
    }
}
