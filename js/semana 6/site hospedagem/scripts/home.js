let dadosHospedagem = []
//botao logout//
const botaoLogout = document.getElementById("botaoLogout")
botaoLogout.addEventListener("click", () => {
  window.location.href = "index.html";
});
const botaoReserva = document.getElementById("botaoReserva")
botaoReserva.addEventListener("click", () => {
  window.location.href = "reserva.html";
});
function gerarTabela(event){
event.preventDefault();

fetch("http://localhost:3000/reservas")
  .then(response => response.json())
  .then(save => dadosHospedagem = save)
  .then(data => data.map((item)=> { 

  const tr = document.createElement("tr");

  const tdQuarto = document.createElement("td");
  tdQuarto.innerHTML = item.quarto;
  tr.appendChild(tdQuarto);

  const tdCliente = document.createElement("td");
  tdCliente.innerHTML = item.nome;
  tr.appendChild(tdCliente);

  const tdCPF = document.createElement("td");
  tdCPF.innerHTML = item.cpf;
  tr.appendChild(tdCPF);

  const tdPeriodo = document.createElement("td");
  tdPeriodo.innerHTML = `${item.dataInicio} - ${item.dataFinal}`;
  tr.appendChild(tdPeriodo);

  const tdAcao = document.createElement("td")
  const botaoDeletar = document.createElement("button")
  botaoDeletar.id = "botaoDeletar"
  botaoDeletar.innerHTML = "Deletar reserva"
  botaoDeletar.addEventListener("click", () => deletarItem(item.id))
  tdAcao.appendChild(botaoDeletar)
  tr.appendChild(tdAcao)

  document.getElementById('corpoTabela').appendChild(tr);})
    
);



function deletarItem(id){
    const filtrados = dadosHospedagem.filter(item => item.id !== id)
    document.getElementById('corpoTabela').innerHTML="";
    dadosHospedagem = filtrados

    filtrados.map((dados) => {
        const tr = document.createElement("tr");
    
        const tdQuarto = document.createElement("td");
        tdQuarto.innerHTML = dados.quarto;
        tr.appendChild(tdQuarto);
    
        const tdCliente = document.createElement("td");
        tdCliente.innerHTML = dados.nome;
        tr.appendChild(tdCliente);
    
        const tdCPF = document.createElement("td");
        tdCPF.innerHTML = dados.cpf;
        tr.appendChild(tdCPF);
    
        const tdPeriodo = document.createElement("td");
        tdPeriodo.innerHTML =`${dados.dataInicio} - ${dados.dataFinal}`;
        tr.appendChild(tdPeriodo);
    
        const tdAcao = document.createElement("td")
        const botaoDeletar = document.createElement("button")
        botaoDeletar.id = "botaoDeletar"
        botaoDeletar.innerHTML = "Deletar reserva"
        botaoDeletar.addEventListener('click', () => deletarItem(dados.id))
        tdAcao.appendChild(botaoDeletar)
        tr.appendChild(tdAcao)
    
        document.getElementById('corpoTabela').appendChild(tr);

})
}
}

window.onload = gerarTabela