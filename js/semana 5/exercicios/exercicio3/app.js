function concatVetores(){
    const array1 = [1, 2, 3];
    const array2 = [4, 5, 6];
    const novoArray = [...array1, ...array2];
    console.log(novoArray)
}
concatVetores();

function mesclaObjetos(){
    const obj1 = {a: 1, b: 2, c: 3};
    const obj2 = {d: 4,  e: 5, f:6};
    const novoObj = {...obj1, ...obj2};
    console.log(novoObj)
}

mesclaObjetos();

const concatObj = (a, b) => {
    return {...a, ...b}
}

const o1 = {a: 12, b: 3};
const o2 = {c: 1};

console.log(concatObj(o1, o2));