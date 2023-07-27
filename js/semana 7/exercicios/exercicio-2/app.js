const elemLista = document.getElementById("lista-itens");


const dadosListaCrua = [
    {
        id: 1,
        titulo: "Batata"
    },
    {
        id: 2,
        titulo: "Arroz"
    },
    {
        id: 3,
        titulo: "Ervilha"
    }
];

let listaInstancias = [];

function criaInstanciasItens(lista){
    const instancias =lista.map((item) => {
        return new Item(item);
    });

criaInstanciasItens(dadosListaCrua)

}

class Item {
    id;
    titulo;
    constructor(item){
    const {id, titulo} = item;
    this.id= id;
    this.titulo= titulo;
    }
}

function criaItem(item) {
    const { titulo } = item;
    const li = document.createElement("li");
    li.innerHTML = titulo;
    return li;
}

function atualizaTela() {
    elemLista.innerHTML = "";

    dadosLista.forEach((item) => {
        const elemItem = criaItem(item);
        elemLista.appendChild(elemItem);
    });
}

atualizaTela();