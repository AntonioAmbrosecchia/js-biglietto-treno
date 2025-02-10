/* :puntina: Descrizione
Il programma dovrà chiedere all'utente il numero di chilometri che vuole percorrere e l'età del passeggero.
Sulla base di queste informazioni dovrà calcolare il prezzo totale del viaggio, secondo queste regole:
- il prezzo del biglietto è definito in base ai km (0.21 € al km)
- va applicato uno sconto del 20% per i minorenni
- va applicato uno sconto del 40% per gli over 65.
- L'output del prezzo finale va messo fuori in forma umana (con massimo due decimali, per indicare centesimi sul prezzo).
Questo richiederà un minimo di ricerca. */


const windowpromptkm = prompt("Quanti Km vuoi percorrere?");
console.log(windowpromptkm);

const windowpromptage = prompt("Quanti anni ha il passeggero?");
console.log(windowpromptage);



let costskm = windowpromptkm * 0.21;

let costskm_mn = windowpromptkm * 0.16;

let costskm_old = windowpromptkm * 0.12;

if (windowpromptage < 18) {
    console.log(costskm_mn * windowpromptkm)

}