// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var pariDispari = prompt('scegli se giochi per pari o per dispari');
console.log(pariDispari);
var numeroUtente = parseInt(prompt('scegli un numero per giocare da 1 a 5'));
console.log(numeroUtente);
var numeroMacchina = getRandomIntInclusive (1,5);
console.log(numeroMacchina);

var somma = numeroUtente + numeroMacchina;
console.log(somma);

var pariDispariResult = '';

if (somma %2 == 0){
  pariDispariResult = ('pari');
}
else {
  pariDispariResult = ('dispari');
}
console.log('risultato del pari dispari è: ' + pariDispariResult);

var messaggio = '';
var pariDispariCompare = compare(pariDispari, pariDispariResult)
console.log(pariDispariCompare);

if (pariDispariCompare == true) {
  console.log('HAI VINTO!');
}
else {
  console.log('HAI PERSO!');
}

// funzione comparazione
function compare (valore1, valore2) {
  if (valore1 == valore2){
    return true;
  }
  else {
    return false;
  }
}

// Funzione generazione numero random
function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
