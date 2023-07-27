import { Personagem } from "./personagem.js";

const zunino = new Personagem("Zunino");

console.log(zunino.percentualVida);

zunino.sofreuDano(50);

console.log(zunino.percentualVida);

zunino.usouKitMedico();

console.log(zunino.percentualVida);
