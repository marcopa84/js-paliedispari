// Scrivi una funzione per capire se la parola è palindroma

var parolaUtente = prompt('Inserisci la parola da verificare:');
console.log(parolaUtente);

var parolaAlContrario = giraParola(parolaUtente);

if (parolaUtente == parolaAlContrario) {
  console.log('la parola e palindroma');
}
else {
  console.log('la parola non palindroma');
}

function giraParola (parola) {
  var parolaGirata = '';
  for (var i = parola.length -1 ; i >= 0 ; i--) {
   parolaGirata += parola[i];
  }
  return parolaGirata;
}
console.log(parolaAlContrario);
