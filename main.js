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



let pricekm = 0.21;

let pricekm_mn = 0.16;

let pricekm_old = 0.12;

if (windowpromptage <= 17) {
    console.log(pricekm_mn * windowpromptkm)

} else if (windowpromptage >= 65) {
    console.log(pricekm_old * windowpromptkm)

} else {
    console.log(pricekm * windowpromptkm)
}