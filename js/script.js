// Oggetti
// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. Stampare a schermo attraverso il for in tutte le proprietà.
// - Creare un array di oggetti di studenti. Ciclare su tutti gli studenti e stampare per ognuno nome e cognome
// - Dare la possibilità all’utente attraverso 3 prompt di
// aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
// Possiamo fare anche sullo stesso file o comunque stessa cartella, se ci pensate può essere una sequenza sullo stesso ex.
// Anche nel punto 2 gli oggetti studenti che stasnno nell’array hanno almeno le 3 proprietà come in quello iniziale.

// - Creare un oggetto che descriva uno studente con le seguenti proprietà: nome, cognome e età. 

var studente = {
    'nome': 'Davide',
    'cognome': 'Zingali',
    'eta': '33'
};

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente) {
   console.log(key + ': ' + studente[key]);
}

// - Creare un array di oggetti di studenti. 

var arrayStudenti = [
    {
        'nome': 'Davide',
        'cognome': 'Zingali',
        'eta': '33'
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
    for (var key in arrayStudenti[i]) {
            console.log(key + ': ' + arrayStudenti[i][key]);
        }
}

// - Dare la possibilità all’utente attraverso 3 prompt
var inputNome = prompt('Inserisci il tuo nome');
var inputCognome = prompt('Inserisci il tuo cognome');
var inputEta = prompt("Inserisci la tua eta'");

// di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età. 
var inputStudente = {
    'nome': inputNome,
    'cognome': inputCognome,
    'eta': inputEta
}
console.log(inputStudente);




// Bonus
// se volete anadate di interazione e/o layout più ricco;
// e/o gestione casi limite;
// ciò che volete provare.