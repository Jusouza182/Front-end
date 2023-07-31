document.getElementById("form").addEventListener("submit",calcularSalario);

const salario = document.getElementById("salario");
const botaoReset = document.getElementById("botaoReset");
const resultado = document.getElementById("resultado");
resultado.hidden = true;
function calcularSalario(event){
    event.preventDefault()

    document.getElementById("form").hidden = true;
    resultado.hidden = false;
    botaoReset.hidden = false;

    function calcularImpostoRenda(){
    let impostoRenda = 0
  
    if(salario.value <= 1903.98) {
     impostoRenda = 0
   } else if(salario.value >= 1903.99 && salario.value <= 2826.65 ) {
     impostoRenda = (salario.value * 0.075 ) - 142.80
   } else if(salario.value >= 2826.66 && salario.value <= 3751.05) {
     impostoRenda = ( salario.value * 0.15) - 354.80
   } else if(salario.value >= 3751.06 && salario.value <= 4664.68) {
     impostoRenda =( salario.value * 0.225) - 636.13
   } else {
     impostoRenda = (salario.value * 0.275) - 869.36
   }
   return impostoRenda.toFixed(2)
}

   function calcularInss(){
    let inss = 0
   
    if (salario.value <= 1302) {
           inss = salario.value * 0.075 // 7.5%
       } else if (salario.value >= 1302.01 && salario.value <= 2571.29) {
           inss = salario.value * 0.09 // 9%
       } else if (salario.value >= 2571.30 && salario.value <= 3856.94) {
           inss = salario.value * 0.12 // 12%
       } else {
           inss = salario.value * 0.14 //14%
       }
     
     return inss.toFixed(2)
   }
   
   function calcularSalarioLiquido(){
      const resultadoSalarioLiquido = salario.value - calcularImpostoRenda() - calcularInss() 
      return resultadoSalarioLiquido.toFixed(2)
   }

  
   resultado.innerHTML = 
   `
    Imposto de renda - R$${calcularImpostoRenda()} <br><br>
    Contribuição INSS - R$${calcularInss()}<br><br>
    Salário a receber - R$${calcularSalarioLiquido()}
    `
   }
botaoReset.addEventListener("click",reset);
function reset(){
    resultado.hidden = true;
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
}