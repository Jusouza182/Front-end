document.getElementById("form").addEventListener("submit",calcularMedia);

const nota1 = document.getElementById("nota2");
const nota2 = document.getElementById("nota2");
const nota3 = document.getElementById("nota3");
const botaoReset = document.getElementById("botaoReset");
const resultado = document.getElementById("resultado");

function calcularMedia(event){
    event.preventDefault()

    document.getElementById("form").hidden = true;
    resultado.hidden = false;

const media = (Number(nota1.value)+Number(nota2.value)+Number(nota3.value))/3;
console.log(media)
if(media <= 6.9){
    resultado.innerHTML = `Em recuperação - média ${media}`
    resultado.className = "recuperação";
}else{
    resultado.innerHTML = `Aprovado - média ${media}`
    resultado.className = "aprovado"
}
botaoReset.hidden = false;
}

botaoReset.addEventListener("click",reset);
function reset(){
    resultado.hidden = true;
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
}