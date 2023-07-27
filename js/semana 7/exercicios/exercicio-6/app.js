import Juros from "./juros.js";

const primeiraImplementacao = new Juros(10.000,0.07,24)
const pImplSimples = primeiraImplementacao.calcularJurosSimples();
const pImplComposta = primeiraImplementacao.calcularJurosCompostos();
console.log(pImplComposta);
console.log(pImplSimples);

const segImplementacao = new Juros(10.000,0.15,10)
const sImplSimples = segImplementacao.calcularJurosSimples();
const sImplComposta = segImplementacao.calcularJurosCompostos();
console.log(sImplSimples);
console.log(sImplComposta);
