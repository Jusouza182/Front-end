//importar lista de arrays de usuarios//
import { usuarios } from "../dados/usuarios.js";

//fazer com que a página não recarregue ao clicar nos botões//
document.addEventListener("submit", (event) => {
  event.preventDefault();
});

const botao = document.getElementById("botaoLogin");
botao.addEventListener("click", () => {
  //limpa os campos de erro ao digitar email e senha//
  document.getElementById("spanSenha").hidden = true;
  document.getElementById("spanEmail").hidden = true;

  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  if (email === "") {
    document.getElementById("spanEmail").hidden = false;
  } else if (senha === "") {
    document.getElementById("spanSenha").hidden = false;
  } else {
    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.senha === senha
    );
    if (usuarioEncontrado) {
      window.location.href = "home.html";
    } else {
      alert("Usuario não encontrado");
    }
  }
});