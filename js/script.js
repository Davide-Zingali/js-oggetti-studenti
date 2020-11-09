// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
// Possiamo fare anche sullo stesso file o comunque stessa cartella, se ci pensate può essere una sequenza sullo stesso ex.
// Anche nel punto 2 gli oggetti studenti che stasnno nell’array hanno almeno le 3 proprietà come in quello iniziale.

// 1 - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 
console.log('Primo esercizio:');
console.log(' ');

var studente = {
    'nome': 'Davide',
    'cognome': 'Zingali',
    'eta': '33'
};

console.log(studente);
console.log(' ');

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente) {
   console.log(key + ': ' + studente[key]);
}

// 2 - Creare un array di oggetti di studenti. 
console.log(' ');
console.log('Secondo esercizio:');

var arrayStudenti = [
    {
        'nome': 'Danny',
        'cognome': 'Longo',
        'eta': '15'
    },
    {
        'nome': 'Sandra',
        'cognome': 'Sofia',
        'eta': '30'
    },
    {
        'nome': 'Paola',
        'cognome': 'Sofia',
        'eta': '60'
    },
    {
        'nome': 'Samuele',
        'cognome': 'Lombardo',
        'eta': '20'
    }
];

// Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
for (var i = 0; i < arrayStudenti.length; i++) {
    console.log(' ');
    console.log('Studente: ' + [i+1]);
    for (var key in arrayStudenti[i]) {
            console.log(key + ': ' + arrayStudenti[i][key]);
        }
}

// 3 - Dare la possibilità all’utente attraverso 3 prompt
console.log(' ');
console.log('Terzo esercizio:');
console.log(' ');

var nome = prompt('Inserisci il tuo nome');
var cognome = prompt('Inserisci il tuo cognome');
var eta = prompt("Inserisci la tua eta'");

// Nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
var inputStudente = {
    'nome': nome,
    'cognome': cognome,
    'eta': eta
}

console.log(inputStudente);

arrayStudenti.push({ nome, cognome, eta });
console.log(' ');
console.log(arrayStudenti);