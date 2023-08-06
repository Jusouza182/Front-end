document.getElementById("formReserva").addEventListener('submit', fazerReserva);


function fazerReserva(event){
event.preventDefault()

const nomeCompleto = document.getElementById("nomeCompleto");
const cpf = document.getElementById("cpf");
const dataInicio = document.getElementById("dataInicio");
const dataFinal = document.getElementById("dataFinal");
const select = document.getElementById("quartos");
const botaoReserva = document.getElementById("botaoReservar");
const nomeErro = document.getElementById("nomeErro");
const cpfErro = document.getElementById("cpfErro");
const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
const dataErro = document.getElementById("dataErro");
const selectErro = document.getElementById("erroSelect");

if(select.value === ""){
    select.classList.add("input-erro");
    selectErro.innerHTML = "Quarto é"
}
else if(nomeCompleto.value === ""){
    nomeCompleto.classList.add("input-erro");
    nomeErro.innerHTML = "Nome é obrigatório!"
}else if( cpfRegex.test(cpf.value) === false || cpf.value === ""){
    cpf.classList.add("input-erro");
    cpfErro.innerHTML = "CPF é obrigatório!"
}else if(dataInicio.value === "" || dataFinal.value === ""){
    dataInicio.classList.add("input-erro");
    dataFinal.classList.add("input-erro")
    dataErro.innerHTML = "Data de check-in e check-out é obrigatório!"
}else{
   botaoReserva.style.opacity = 0.5;
   botaoReserva.innerHTML = 'Registrando...'
   botaoReserva.disabled = true;

   fetch("http://localhost:3000/reservas", {
      method: "POST",
      body: JSON.stringify({
        quarto: select.value,
        nome: nomeCompleto.value,
        cpf: cpf.value,
        dataInicio: dataInicio.value,
        dataFinal: dataFinal.value,
      }),
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    })
    .then(() => {
        window.location.href = "home.html"
      })
      .catch(() => {
        alert('Desculpe. Houve um erro ao fazer sua reserva')
      })
}
}