/*

L’utente indica un livello di difficoltà in base al quale viene generata una griglia di gioco quadrata.
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

/*
0. Scegliere la difficoltà.
1. Generare la griglia.
2. Assegnare numeri alla griglia.
*/

    // Variabili universali
const button = document.querySelector("button");
// console.log(button);
const container = document.querySelector(".container");
// console.log(container);

let livello = 10; /*dinamico in base a difficolta*/


    // Logica
// Non funziona!
button.addEventListener('click', inizia());
// Non funziona!


    // Funzioni
function inizia(){

    for(let i = 1; i <= livello /*dinamico in base a difficolta*/; i++){
        creaCelleGrandi(container);
        console.log(i);
    }

}

function creaCelleGrandi (doveCreare){
    const box = document.createElement("div");
    box.classList.add("box", "box"+livello);
    console.log(box);
    box.append(numeroCasuale(livello));
    doveCreare.append(box);
    return box;
}

function numeroCasuale(num){
    let numeroEstratto = Math.ceil(Math.random() * num);
    return numeroEstratto;
}