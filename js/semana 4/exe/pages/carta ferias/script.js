document.getElementById("form").addEventListener("submit",fazerCarta);

const nome = document.getElementById("nome");
const dataI = document.getElementById("dataI");
const dataT = document.getElementById("dataT");
const botaoReset = document.getElementById("botaoReset");
const resultado = document.getElementById("resultado");
const dataHoje = new Date().toLocaleDateString()

function fazerCarta(event){
    event.preventDefault()

    document.getElementById("form").hidden = true;
    resultado.hidden = false;
    botaoReset.hidden = false;

    resultado.innerHTML = `Caro(a) responsável <br><br>
    Gostaria de solicitar minhas férias: <br><br>
    
    Nome do funcionário: ${nome.value} <br><br>
    Data de inicio: ${dataI.value}<br><br>
    Data de fim: ${dataT.value}<br><br>
    
    Agradeço a atenção<br><br>
    
    Atenciosamente, ${nome.value}<br><br>
    
    Gerado em ${dataHoje}<br><br>
    `
    botaoReset.hidden = false;
}

botaoReset.addEventListener("click",reset);
function reset(){
    resultado.hidden = true;
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
}