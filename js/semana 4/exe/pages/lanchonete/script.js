document.getElementById("form").addEventListener("submit",fazerPedido);


const tabela = document.getElementById("tabela");
const botaoReset = document.getElementById("botaoReset");
const resultado = document.getElementById("resultado");

function fazerPedido(event){
    event.preventDefault()

    document.getElementById("form").hidden = true;
    resultado.hidden = false;

    switch (codigo) {
        case 1123: {
          calcularPreco(12.00, quantidade)
          break;
        }
        case 3423: {
          calcularPreco(9.00, quantidade)
          break;
        }
        case 4521:
          calcularPreco(15.00, quantidade)
          break;
        case 5322: {
          calcularPreco(16.00, quantidade)
          break;
        }
        default:
          console.log("Código inválido");
      }

      function calcularPreco() {
        let valorTotal = preco * quantidade;}
        return(``);

      botaoReset.hidden = false;
}
botaoReset.addEventListener("click",reset);
function reset(){
    resultado.hidden = true;
    document.getElementById("form").hidden = false;
    botaoReset.hidden = true;
}