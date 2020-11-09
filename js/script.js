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
console.log(studente);

// Stampare a schermo attraverso il for in tutte le proprietà.
for (var key in studente) {
   console.log(key + ': ' + studente[key]);
}







// Bonus
// se volete anadate di interazione e/o layout più ricco;
// e/o gestione casi limite;
// ciò che volete provare.