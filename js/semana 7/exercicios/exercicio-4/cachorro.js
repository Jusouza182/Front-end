import {Animal} from "./animal.js";

export class Cachorro extends Animal{
    constructor(nome,idade){
        super(nome,idade);
        this.som='latido';
    }
}


