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
// ogni array ha un primo elemento, un ultimo elemento e un numero variabile elementi intermedi
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
