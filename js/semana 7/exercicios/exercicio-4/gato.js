import  {Animal}  from "./animal.js";

export class Gato extends Animal{
    constructor(nome,idade,som){
        super(nome,idade,som)
        this.som='miado';
    }
}