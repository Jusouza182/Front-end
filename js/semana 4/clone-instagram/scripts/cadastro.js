function fazerCadastro(){

var nome = document.getElementById("campo-nome").value 
var senha = document.getElementById('campoSenha').value

if(nome === ""){
    document.getElementById('campo-nome').classList.add('input-error')
    document.getElementById("errorNome").hidden = false
    document.getElementById("errorNome").innerText = "O nome é obrigatório"
}else if(senha.length < 9){
    document.getElementById("campoSenha").classList.add("input-error")
    document.getElementById("errorSenha").hidden = false
    document.getElementById("erroSenha").innerText = "A senha tem que ter no minimo 8 caractere"
}


}