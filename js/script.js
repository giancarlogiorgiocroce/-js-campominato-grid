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
const container = document.querySelector(".container");
const button = document.querySelector('#btn');
const livello = document.querySelector('#livello');

const arrayNumeri = [];
let livelloSfida;


// Logica
livello.addEventListener("change", assegnaLv);
button.addEventListener("click", inizia);


// Funzioni
function inizia(){

    assegnaLv();

    for(let i = 1; i <= livelloSfida; i++){
        const box = creaCelle(container);
        box.append(i);


        box.addEventListener('click', function(){
            this.classList.add('active');
        })
    }
    
}

function assegnaLv(){
    livelloSfida = livello.options[livello.selectedIndex].value;
}

function creaCelle (doveCreare){
    const box = document.createElement("div");
    box.classList.add("box", "box"+livelloSfida);
    doveCreare.append(box);
    return box;
}