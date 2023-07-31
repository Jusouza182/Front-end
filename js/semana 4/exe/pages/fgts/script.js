document.getElementById("form").addEventListener("submit",calcularFgts);

const salario = document.getElementById("salario");
const botaoReset = document.getElementById("botaoReset");
const resultado = document.getElementById("resultado");
const resultado2 = document.getElementById("resultado2");


function calcularFgts(event){
    event.preventDefault()

    document.getElementById("form").hidden = true;
    resultado.hidden = false;
    resultado2.hidden = false;


    const fgts = Number(salario.value) * 0.08;
    console.log(fgts)
    const fgtsAnual = fgts * 12;

    resultado.innerHTML = `FGTS mensal - R$${fgts}`
    resultado.className = "fgts";
    
    resultado2.innerHTML = `FGTS anual - R$${fgtsAnual}`
    resultado2.className = "fgtsAnual";

    botaoReset.hidden = false;

}
botaoReset.addEventListener("click",reset);
function reset(){
    resultado.hidden = true;
    resultado2.hidden = true;
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
}