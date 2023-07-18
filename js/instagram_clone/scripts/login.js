import { usuarios } from "../constantes/usuarios.js";

document.getElementById("formLogin").addEventListener("submit", realizarLogin);

const campoEmail = document.getElementById("campo-email");
const campoSenha = document.getElementById("campo-senha");
const loginButton = document.getElementById("login-button");

function realizarLogin(event) {
  event.preventDefault();

  const email = campoEmail.value;
  const senha = campoSenha.value;

  campoEmail.classList.remove("input-error");
  campoSenha.classList.remove("input-error");

  if (email === "") {
    campoEmail.classList.add("input-error");
    campoEmail.focus();
  } else if (senha === "") {
    campoSenha.classList.add("input-error");
    campoEmail.focus();
  } else {
    loginButton.disabled = true;
    loginButton.style.opacity = 0.5;
    loginButton.innerText = "Logando ...";

    const usuarioEncontrado = usuarios.find(
      (usuario) => usuario.email === email && usuario.password === senha
    );

    if (usuarioEncontrado) {
      localStorage.setItem("nome_usuario", "Henrique");

      campoEmail.style.display = "none";
      campoSenha.style.display = "none";
      loginButton.style.display = "none";

      setTimeout(() => {
        window.location.href = "./home.html";
      }, 3000);
      // redireciona para outra página
    } else {
      loginButton.disabled = false;
      loginButton.style.opacity = 1;
      loginButton.innerText = "Entrar";

      alert("Usuário não foi encontrado");
    }
  }
}
