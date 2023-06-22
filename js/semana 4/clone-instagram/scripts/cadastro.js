function fazerCadastro(){

var regexTelefone = /^\(?\d{2}\)?\s?\d{4,5}-?\d{4}$/;
var regexEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

var nome = document.getElementById("campo-nome").value 
var senha = document.getElementById('campoSenha').value
var telefone = document.getElementById('campo-telefone').value
var email = document.getElementById('campo-email').value


document.getElementById('campo-nome').classList.remove("input-error")
document.getElementById('errorNome').hidden = true

document.getElementById('campoSenha').classList.remove("input-error")
document.getElementById('errorSenha').hidden = true

document.getElementById('campo-telefone').classList.remove("input-error")
document.getElementById('errorTelefone').hidden = true

document.getElementById('campo-email').classList.remove("input-error")
document.getElementById('error-email').hidden = true


if(nome === ""){
    document.getElementById('campo-nome').classList.add('input-error')
    document.getElementById("errorNome").hidden = false
    document.getElementById("errorNome").innerText = "O nome é obrigatório"
}else if (regexEmail.test(email) === false) {
    document.getElementById('campo-email').classList.add('input-error')
    document.getElementById('error-email').hidden = false
    document.getElementById('error-email').innerText = "Digite um email válido"
}else if(senha.length < 9){
    document.getElementById("campoSenha").classList.add("input-error")
    document.getElementById("errorSenha").hidden = false
    document.getElementById("errorSenha").innerText = "A senha tem que ter no minimo 8 caractere"

}else if(regexTelefone.test(telefone) === false){
    document.getElementById("campo-telefone").classList.add("input-error")
    document.getElementById("errorTelefone").hidden = false
    document.getElementById("errorTelefone").innerText = "Digite um telefone válido"
}


    
}