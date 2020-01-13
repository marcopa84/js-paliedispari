// L’utente sceglie pari o dispari e un numero da 1 a 5.
// Generiamo un numero random (sempre da 1
// a 5) per il computer.
// Sommiamo i due numeri e dichiariamo chi ha
// vinto (controlliamo se la somma da pari o dispari).

var gioca = document.getElementById('gioca');
gioca.addEventListener('click',
  function() {
    // prendo il valore pari dispari dall input e lo stampo
    var pariDispari = document.getElementById('pari_dispari').value;
    console.log(pariDispari);
    document.getElementById('print_paridispari').innerHTML= pariDispari;

    // prendo il valore numero dall input e lo stampo
    var numeroUtente = parseInt(document.getElementById('numero_utente').value);
    console.log(numeroUtente);
    document.getElementById('print_numeroutente').innerHTML= numeroUtente;

    // genero il numero casuale e lo stampo
    var numeroMacchina = getRandomIntInclusive (1,5);
    console.log(numeroMacchina);
    document.getElementById('print_numeromacchina').innerHTML= numeroMacchina;

    //faccio la somma e la stampo
    var somma = numeroUtente + numeroMacchina;
    console.log(somma);
    document.getElementById('print_somma').innerHTML= somma;

    //valuto se il risultato è pari o dispari
    var pariDispariResult = '';
    if (somma %2 == 0){
      pariDispariResult = ('pari');
    }
    else {
      pariDispariResult = ('dispari');
    }
    console.log('risultato del pari dispari è: ' + pariDispariResult);
    document.getElementById('print_paridispariresult').innerHTML= pariDispariResult;

    //Comunico la vincita o la perdita
    var messaggio = '';
    var pariDispariCompare = compare(pariDispari, pariDispariResult)
    console.log(pariDispariCompare);

    if (pariDispariCompare == true) {
      console.log('HAI VINTO!');
      document.getElementById('messaggio').innerHTML= ('HAI VINTO!');
    }
    else {
      console.log('HAI PERSO!');
      document.getElementById('messaggio').innerHTML= ('HAI PERSO!');
    }
  }
);

var annulla = document.getElementById('annulla');
annulla.addEventListener('click',
  function() {
    // pulisco i campi input
    document.getElementById('pari_dispari').value='';
    document.getElementById('numero_utente').value='';
    // pulisco i risultati
    document.getElementById('print_paridispari').innerHTML= '';
    document.getElementById('print_numeroutente').innerHTML='';
    document.getElementById('print_numeromacchina').innerHTML='';
    document.getElementById('print_somma').innerHTML='';
    document.getElementById('print_paridispariresult').innerHTML='';
    document.getElementById('messaggio').innerHTML='';
  }
);

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
