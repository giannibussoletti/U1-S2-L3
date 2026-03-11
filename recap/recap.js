// RECAP DI IERI
// Sono sstate affrontate strutture di dati COMPLESSE -> OGGETTI & ARRAY

// OGGETTO
// Si usa quando bisogna salvare delle variabili, ma queste variabili fanno capo ad un'unica entità

//Esempio di scrittura di un OGGETTO la sintassi è key : value
const esempioDiOggetto = {
  var1: "roba",
  var2: 12,
  var3: true,
  "is-old": false,
  // le variabili interne possono essere a loro volta delle entità con multiple proprietà interne
  var5: { varDiVar: 0, varDiVar2: "seconda proprietà" },
  var6: false,
}

// per recuperare informazioni si usa la DOT.NOTATION
esempioDiOggetto.var5.varDiVar
esempioDiOggetto.var1

// oppure si usa ba SQUARE BRACKET NOTATION
esempioDiOggetto["var1"] // <-- in questo caso la chiave va comunque definita tra virgolette ("")

// casi particolari: il nome della chiave ha un - dentro
const s2 = house["is-old"] // FUNZIONA
// const s3 = house.is-old // NON FUNZIONA

const m = house["windows"]["material"] // es. per recuperare un valore annidato con la SQUARE BRACKETS

// MODIFICARE / CREARE PROPRIETà NUOVE
esempioDiOggetto.var = "Brutta roba" // Modifica di una proprietà esistente
esempioDiOggetto.var7 = "1200k" // Aggiunta di una nuova proprietà

// ALTRA STRUTTURA DATI : ARRAY
// un ARRAY è una struttura dati che memorizza informazioni sotto forma di COLLEZIONE DI VALORI
// separati da virgola

const numbers = [3, 4, 5, 6, 7, 8, 9]
const stringhe = ["parole", "soltanto", "tra noi", "altra stringa"]
const objects = [
  { name: "Gianni", skills: "Videomaking" },
  { name: "Roberto", skills: "Audio" },
  { name: "Franco", skills: "DOP" },
]
// accesso agli elementi
// l'unico fattore discriminante tra gli elementi di un qualsiasi array è la loro POSIZIONE nell'array
// ogni array ha un primo elemento, un ultimo elemento e un numero variabile e potenzialmente infinito elementi intermedi
// quindi è proprio con la POSIZIONE che noi ACCEDIAMO agli elementi di un qualsiasi array!
// tramite la notazione -> nomeArray[posizioneElemento]
// le posizioni nell'ARRAY partono sempre dalla posizione (INDICE o INDEX) ZERO -> 0

stringhe[0] // primo elemento "parole"
stringhe[1] // primo elemento "soltanto"
stringhe[2] // primo elemento "tra noi"

// il primo elemento ha indice zero, l'ultimo elemento ha indice "lunghezza-1" dove lunghezza (length)
// è pari al numero degli elementi dell'array
// ogni array ha quindi una proprietà "length" che restituisce il NUMERO (degli elementi)
console.log(stringe.length) // restituisce 3 perch è il numero degli elementi all'interno dell'ARRAY

//Tipi di interazioni che si possono avere con un array per modificarlo
stringhe[1] = "comodino" // cambia il valore ad un elemento
stringhe.push("che cosa sei") // aggiunge un elemento in coda (alla fine) dell'ARRAY
stringhe.pop() // rimuove l'ultimo elemento in coda
stringhe.unshift("nuovo primo elemento") // aggiunge un oggetto in cima (all'inizio) dell'ARRAY
stringhe.shift() // rimuove dalla cima l'oggettto
stringhe.splice(2, 1) // tolgo "tra noi" perché ho acceduto alla seconda posizione nell'indice e gli ho detto di togliere solo 1 elemento

// LOGICA CONDIZIONALE

// È normalissimo che i nostri ragionamenti tradotti in codice NON sempre procedano in linea retta;
// alle volte è necessario che il codice prenda una decisione a partire da determinate condizioni.
// es. se hai preso almeno 18 all'esame, l'hai superato
const myVoto = 17

// ESEMPIO
// SE hai preso almeno 18, stampa il primo console.log()
// ALTRIMENTI stampa il secondo
if (myVoto >= 18) {
  console.log("Congratualzioni hai superato l'esame")
} else {
  console.log("Peccato non ci sei riuscito")
}

// è possibile avere anche MULTIPLE  condizioni da verificare
const myName = "Gianni"

if (myName === "Gianni") {
  console.log("Benvenuto, Gianni!")
} else if (myName == "Chistian") {
  console.log("Benvenuto, Christian!")
} else if (myName == "Franco") {
  console.log("Bentornato, Franco!") // Ci possono essere potenzialmente infiniti else if, ma ci sono soluzioni più pratiche
} else {
  console.log("Benvenuto, Sconosciuto!")
}

const nomeApprovato = myName === "Stefano" // nomeApprovato vale true

if (nomeApprovato) {
  // perchè nomeApprovato è già true
  console.log("Nome approvato!")
}

const anotherName = "Davide"

if (anotherName) {
  // questo messaggio viene stampato!
  console.log("Ciao!")
}

// il messaggio viene stampato con if('Davide') perchè in JS tutti i possibili valore, alla fine della fiera,
// possono venire "castati" in un tipo booleano (TRUE o FALSE)
// questo è il significato delle parole "TRUTHY" e "FALSY" in JS.
// in JS TUTTI i valori sono TRUTHY (tendono a true), a parte questi:
// "" una stringa vuota
// 0 o -0
// false
// null/undefined/Nan valori che non riportato un significato specifico
