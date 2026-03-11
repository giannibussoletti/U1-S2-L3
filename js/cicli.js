// CICLI in JS -> LOOP in inglese
// Un clico nello sviluppo software, è una struttura che permette di RIPETERE l'esecuzione
// di un po' di righe di codice un numero determinato o indeterminato di volte.
// Si usano per avere un codice più pulito e essere ricuri di portare a completamento
// determinate tipologie di operazioni.

// esistono principalmente due tipi di cicli
// a) CICLI che NON conoscono a priori il numero di iterazioni necessario per finire l'operazione (es. while)
// b) CICLI che CONOSCONO a priori il numero di iterazioni per completare il task (es. for)

// WHILE
// cicli che si ripetono un numero non prefissiato di volte
// è il più famoso esponente della famiglia a) dei cicli elencati sopra

// ESEMPIO: lanciare un dado finché non esce 6!

// problema: come si simula il lancio di un dado in JS? bisogna estrarre un numero da 1-6

const random = Math.random() //cosa fa? Se eseguito restituisce un numero casuale DECIMALE tra 0 e 1 (Esempio 0.013197099825743797)
console.log(random)

// Ma come ottendo un numero tra 1 e 6 per simulare il lancio di un D6?

const da1a6round = Math.random() * 6 //0.9999999 * 6 = 5.999994

// Math.ceil() arrotonda per eccesso | Math.floor() arrotonda per difetto | Math.round() arrotonda al più vicino
const da1a6 = Math.ceil(da1a6round)
// console.log(da1a6)
console.log(da1a6)

// while () {

// }
