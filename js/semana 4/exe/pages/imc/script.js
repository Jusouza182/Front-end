document.getElementById("form").addEventListener("submit",calcularImc);

const peso = document.getElementById("peso");
const altura = document.getElementById("altura");
const botaoReset = document.getElementById("botaoReset");
const resultado = document.getElementById("resultado");

function calcularImc(event){
    event.preventDefault()
const imc = Number(peso.value) / (Number(altura.value) * Number(altura.value));
console.log(imc);

document.getElementById("form").hidden = true;
resultado.hidden = false;

if(imc <= 18.5){
    resultado.innerHTML = `Abaixo do peso - ${imc}`
    resultado.className = "abaixo";
}else if (imc >= 18.6 && imc <= 24.5) {
    resultado.innerHTML = `Peso ideal - ${imc}`
    resultado.className = "ideal";

}else{
    resultado.innerHTML = `Excesso de peso - ${imc}`
    resultado.className= "excesso";
}

botaoReset.hidden = false;
}

botaoReset.addEventListener("click",reset);
function reset(){
    resultado.hidden = true;
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
    
}