export default class Juros {
    constructor(capitalInicial, taxaAplicada, tempo) {
      this.c = capitalInicial;
      this.i = taxaAplicada;
      this.t = tempo;
    }
    calcularJurosSimples() {
      const j = (this.c * this.i * this.t);
      return j;
    }
    calcularJurosCompostos() {
      const m = this.c *(1 + this.i) ** this.t;
      return (m);
    }
  }