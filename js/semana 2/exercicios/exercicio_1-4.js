var anoDeNacimento = Number(prompt("Digite o ano de nascimento:"))
var anoAtual = 2023
var resultado = (anoAtual - anoDeNacimento) 

if (resultado < 18) {
  console.log (`${18 - resultado} anos para o alistamento`)
} else if (resultado > 18) {
  console.log(`Já se passaram ${resultado - 18} anos do seu alistamento`)
}