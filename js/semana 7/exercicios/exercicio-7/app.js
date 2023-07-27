import Usuario from "./usuario.js";

const botao = document.getElementById('botao');
const formLogin = document.getElementById('formLogin');
const campoSenha = document.getElementById('senha');
const campoEmail = document.getElementById('email');
const texto = document.getElementById('texto');

const usuario = new Usuario("Juliana", 'juliana@juliana.com', '123')

function fazerLogin(event){
    event.preventDefault();
    const email = campoEmail.value;
    const senha = campoSenha.value;

    const logar = usuario.autenticar(email,senha);

    if(logar){
        texto.innerHTML = `Olá ${usuario.nome}`
    }else{
        texto.innerHTML = 'Credenciais erradas'
    }
}

formLogin.addEventListener('submit', fazerLogin);