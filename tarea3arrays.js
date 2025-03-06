// Introducción a JavaScript
// Tarea 3 : 

let frutas = ["manzana", "banana", "naranja", "manzana", "kiwi", "naranja", "manzana", "pera", "kiwi", "banana", "manzana", "naranja", "kiwi"];


let conteoFrutas={};


for (let i = 0; i < frutas.length; i++){
    let fruta = frutas[i];
    if (conteoFrutas[fruta]) {
        conteoFrutas[fruta]++; 
    }else{
        conteoFrutas[fruta] = 1;
    }
}


console.log("Conteo de frutas usando for:");
console.log(conteoFrutas);


let conteoFrutasWhile = {}; 
let index = 0;

while (index < frutas.length) {
    let fruta = frutas[index];
    if (conteoFrutasWhile[fruta]) {
        conteoFrutasWhile[fruta]++;
    }else{
        conteoFrutasWhile[fruta] = 1;
    }
    index++;
}


console.log("\nConteo de frutas usando while:");
console.log(conteoFrutasWhile);
