import { regexEmail, regexTelefone } from "../uteis/regex.js";

document.getElementById("form").addEventListener("submit", fazerCadastro);

function fazerCadastro(event) {
  event.preventDefault();

  const nome = document.getElementById("campo-nome-completo").value;
  const senha = document.getElementById("campo-senha").value;
  const telefone = document.getElementById("campo-telefone").value;
  const email = document.getElementById("campo-email").value;
  const nomeCompleto = document.getElementById("campo-nome-completo");
  const errorNome = document.getElementById("error-nome");
  const campoSenha = document.getElementById("campo-senha");
  const errorSenha = document.getElementById("error-senha");

  nomeCompleto.classList.remove("input-error");
  errorNome.hidden = true;

  campoSenha.classList.remove("input-error");
  errorSenha.hidden = true;

  document.getElementById("campo-telefone").classList.remove("input-error");
  document.getElementById("error-telefone").hidden = true;

  document.getElementById("campo-email").classList.remove("input-error");
  document.getElementById("error-email").hidden = true;

  if (nome === "") {
    nomeCompleto.classList.add("input-error");
    nomeCompleto.focus();
    errorNome.hidden = false;
    errorNome.innerText = "O nome é obrigatório";
  } else if (senha.length < 9) {
    campoSenha.classList.add("input-error");
    errorSenha("error-senha").hidden = false;
    errorSenha("error-senha").innerText = "A senha deve no minimo 8 caracteres";
  } else if (regexTelefone.test(telefone) === false) {
    document.getElementById("campo-telefone").classList.add("input-error");
    document.getElementById("error-telefone").hidden = false;
    document.getElementById("error-telefone").innerText =
      "Digite um telefone válido";
  } else if (regexEmail.test(email) === false) {
    document.getElementById("campo-email").classList.add("input-error");
    document.getElementById("error-email").hidden = false;
    document.getElementById("error-email").innerText = "Digite um email válido";
  } else {
    //cadastrar os dados que foram digitados no formulario
    /* 
        GET - lista varias informações;
        POST - cadastra um novo recurso;
        DELETE - deletar um recurso; 
        PUT - atualiza todas as informações;
        PATCH - atualiza uma informação;
        */

    document.getElementById('login-button').style.opacity = 0.5;
    document.getElementById('login-button').innerHTML = 'Cadastrando...'
    document.getElementById('login-button').disabled = true;

    fetch("http://localhost:3333/usuarios", {
      method: "POST",
      body: JSON.stringify({
        nome: nome,
        senha: senha,
        telefone: telefone,
        email: email,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(() => {
      alert("Cadastrado com sucesso!")
      window.location.href = "../index.html"
    })
    .catch(() => {
      alert('Desculpe. Houve um erro ao cadastrar o usuario')
    })
  }
}
