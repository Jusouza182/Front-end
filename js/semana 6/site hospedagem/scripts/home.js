import { hospedagens } from "../dados/hospedagem.js";
let dadosHospedagem = [...hospedagens]

//botao logout//
const botao = document.getElementById("botaoLogout");
botao.addEventListener("click", () => {
  window.location.href = "index.html";
});


//inserir os dados na tabela//
function gerarTabela() {

  hospedagens.map((hospedagem) => {
    const tr = document.createElement("tr");

    const tdQuarto = document.createElement("td");
    tdQuarto.innerHTML = hospedagem.quarto;
    tr.appendChild(tdQuarto);

    const tdCliente = document.createElement("td");
    tdCliente.innerHTML = hospedagem.cliente;
    tr.appendChild(tdCliente);

    const tdCPF = document.createElement("td");
    tdCPF.innerHTML = hospedagem.cpf;
    tr.appendChild(tdCPF);

    const tdPeriodo = document.createElement("td");
    tdPeriodo.innerHTML = hospedagem.periodo;
    tr.appendChild(tdPeriodo);

    const tdAcao = document.createElement("td")
    const botaoDeletar = document.createElement("button")
    botaoDeletar.id = "botaoDeletar"
    botaoDeletar.innerHTML = "Deletar reserva"
    botaoDeletar.addEventListener("click", () => deletarItem(hospedagem.id))
    tdAcao.appendChild(botaoDeletar)
    tr.appendChild(tdAcao)

    document.getElementById('corpoTabela').appendChild(tr);
  });
}

function deletarItem(id){
    const filtrados = dadosHospedagem.filter(item => item.id !== id)
    document.getElementById('corpoTabela').innerHTML="";
    dadosHospedagem = filtrados

    filtrados.map((hospedagem) => {
        const tr = document.createElement("tr");
    
        const tdQuarto = document.createElement("td");
        tdQuarto.innerHTML = hospedagem.quarto;
        tr.appendChild(tdQuarto);
    
        const tdCliente = document.createElement("td");
        tdCliente.innerHTML = hospedagem.cliente;
        tr.appendChild(tdCliente);
    
        const tdCPF = document.createElement("td");
        tdCPF.innerHTML = hospedagem.cpf;
        tr.appendChild(tdCPF);
    
        const tdPeriodo = document.createElement("td");
        tdPeriodo.innerHTML = hospedagem.periodo;
        tr.appendChild(tdPeriodo);
    
        const tdAcao = document.createElement("td")
        const botaoDeletar = document.createElement("button")
        botaoDeletar.id = "botaoDeletar"
        botaoDeletar.innerHTML = "Deletar reserva"
        botaoDeletar.addEventListener('click', () => deletarItem(hospedagem.id))
        tdAcao.appendChild(botaoDeletar)
        tr.appendChild(tdAcao)
    
        document.getElementById('corpoTabela').appendChild(tr);

})
}

window.onload = gerarTabela