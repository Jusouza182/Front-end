import {listaColaboradores} from './colaborador.js'

class Colaborador{
    constructor(cpf,nomeCompleto,salario){
        this.cpf=cpf;
        this.nomeCompleto=nomeCompleto;
        this.salario=salario;

    }
    promover(percentual){
      const novoSalario= this.salario + this.salario * (percentual/100);
      this.salario=novoSalario;
    }
}
const lista = listaColaboradores.map(item => {
    const cpfRegex = /^\d{3}\.\d{3}\.\d{3}-\d{2}$/;
    console.log(cpfRegex.test(item.cpf))
    return new Colaborador(item.cpf,item.nomeCompleto,item.salario);

});
console.log(lista[0]);
lista[0].promover(50)

console.log(lista[0].salario)
