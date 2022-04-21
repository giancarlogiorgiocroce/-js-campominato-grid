/*

L’utente indica un livelloSfida di difficoltà in base al quale viene generata una griglia di gioco quadrata.
in cui ogni cella contiene un numero tra quelli compresi in un range:
con difficoltà 1 => tra 1 e 100
con difficoltà 2 => tra 1 e 81
con difficoltà 3 => tra 1 e 49

Quando l’utente clicca su ogni cella, la cella cliccata si colora di azzurro.

1. Creiamo prima una griglia unica (es con 100 quadratini) per  poi dinamicizzare il dato con classi css dedicate
2. Scriviamo prima cosa vogliamo fare passo passo in italiano, dividiamo il lavoro in micro problemi.
Ad esempio:
Di cosa ho bisogno per generare i numeri?
Proviamo sempre prima con dei console.log() per capire se stiamo ricevendo i dati giusti.
Le validazioni e i controlli possiamo farli anche in un secondo momento.

*/

    // Variabili universali
// const button = document.querySelector("button");
// console.log(button);
const container = document.querySelector(".container");
// console.log(container);
const arrayNumeri = [];

// livelloSfida = document.getElementById("facile").value;
// console.log(livelloSfida);
// livelloSfida = document.getElementById("medio").value;
// console.log(livelloSfida);
// livelloSfida = document.getElementById("difficile").value;
// console.log(livelloSfida);




// Logica
const button = document.querySelector("#facile, #medio, #difficile");
let livelloSfida = button.value;
button.addEventListener("click", inizia);

/*

const facile = document.getElementById("facile");
// livelloSfida = facile.value;
facile.addEventListener("click", inizia);

const medio = document.getElementById("medio");
// livelloSfida = medio.value;
medio.addEventListener("click", inizia);

const difficile = document.getElementById("difficile");
// livelloSfida = difficile.value;
difficile.addEventListener("click", inizia);

*/

    // Funzioni
function inizia(){

    for(let i = 1; i <= livelloSfida; i++){
        const box = creaCelle(container);
        box.append(i);


        box.addEventListener('click', function(){
            this.classList.add('active');
        })

    }

}

function creaCelle (doveCreare){
    const box = document.createElement("div");
    box.classList.add("box", "box"+livelloSfida);
    doveCreare.append(box);
    return box;
}