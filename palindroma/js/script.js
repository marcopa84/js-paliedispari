// Scrivi una funzione per capire se la parola è palindroma

var parolaUtente = prompt('Inserisci la parola da verificare:');

console.log(parolaUtente[0]);
console.log(parolaUtente[1]);
console.log(parolaUtente[2]);

var lunghezzaParola = parolaUtente.length ;
console.log(lunghezzaParola);

var risultato;
var primaCoppia
if (lunghezzaParola = 3) {
  primaCoppia = compare (parolaUtente[0], parolaUtente[2]);
  console.log('la prima coppia e:' + primaCoppia);
  if (primaCoppia == true){
    risultato = true;
  }
}

console.log('la parola è palinfroma:' + risultato);








// Funzione di comparazione

function compare (letter1, letter2){
  if (letter1 == letter2){
    return true;
  }
  else {
    return false;
  }
}
