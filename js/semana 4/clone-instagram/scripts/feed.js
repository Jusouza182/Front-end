
var usuario = {
    userName: "jusouza182" ,
    qtd_seguidores:"100" ,
    qtd_seguindo: "20" ,
    nome: "Juliana SS" ,
    qtd_publicacoes: "10" ,
    foto:"" , 

}

var nome = "Douglas"

function mostrarInformacoes(){
    document.getElementById('nome').innerText = usuario.nome
    document.getElementById('qtd_seguidores').innerText = usuario.qtd_seguidores
    document.getElementById('qtd_seguindo').innerText = usuario.qtd_seguindo
    document.getElementById('qtd_publicacoes').innerText = usuario.qtd_publicacoes
    document.getElementById('qtd_userName').innerText = usuario.userName
}

window.onload = mostrarInformacoes