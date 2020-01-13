// Scrivi una funzione per capire se la parola è palindroma

var parolaUtente = prompt('Inserisci la parola da verificare:');

console.log(parolaUtente[0]);
console.log(parolaUtente[1]);
console.log(parolaUtente[2]);
console.log(parolaUtente[3]);
console.log(parolaUtente[4]);
console.log(parolaUtente[5]);
console.log(parolaUtente[6]);

var lunghezzaParola = parolaUtente.length ;
console.log(lunghezzaParola);

var risultato;
var primaCoppia;
var secondaCoppia;
if (lunghezzaParola = 3) {
  primaCoppia = compare (parolaUtente[0], parolaUtente[2]);
  console.log('la prima coppia e:' + primaCoppia);
  if (primaCoppia == true){
    risultato = true;
  }
  else{
    risultato = false;
  }
}
if (lunghezzaParola = 4) {
  primaCoppia = compare (parolaUtente[0], parolaUtente[2]);
  secondaCoppia = compare (parolaUtente[1], parolaUtente[3]);
  console.log('la prima coppia e:' + primaCoppia);
  if (primaCoppia == true && secondaCoppia == true){
    risultato = true;
  }
  else{
    risultato = false;
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
