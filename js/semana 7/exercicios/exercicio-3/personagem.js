export class Personagem {
    constructor(nome) {
      this.nome = nome;
      this.percentualVida = 100;
    }
    sofreuDano(percentualDano) {
      const dano = this.percentualVida - percentualDano;
      if (percentualDano < 0) {
        percentualDano = 0;
      }
      this.percentualVida = dano;
    }
    usouKitMedico() {
      const vida = this.percentualVida + 10;
      if (this.percentualVida > 100) {
        this.percentualVida = 100;
      }
      this.percentualVida = vida;
    }
  }
  