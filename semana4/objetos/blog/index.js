const arrayPost = []

function criarPost(){
    
    let vtitulo=document.getElementById("titulo-post").value
    let vautor=document.getElementById("autor-post").value
    let vconteudo=document.getElementById("conteudo-post").value
    let vimg=document.getElementById("img-post").value
    let sectionConteudo =document.getElementById("container-de-posts")

    const post={
        titulo: vtitulo,
        autor: vautor,
        img: vimg,
        conteudo: vconteudo
    }

    arrayPost.push(post)
    zerarCampos()
    console.log(arrayPost)

    if(post.autor !== "" && post.titulo !== "" && post.img !== "" && post.conteudo !== ""){
        sectionConteudo.innerHTML+=`<div class="post">
            <h3>${post.titulo}</h3>
            <h4>${post.autor}</h4>
            <img src=${post.img} />
            <p>${post.conteudo}</p>
        </div>`
    }
}
function zerarCampos(){
    document.getElementById("titulo-post").value=""
    document.getElementById("autor-post").value=""
    document.getElementById("conteudo-post").value=""
    document.getElementById("img-post").value=""
}