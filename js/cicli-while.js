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

//vogliamo contare il numero di lanci che serve per far uscire 6
// dobbiamo lanciare il dado fino a che non esce 6

let risultatoLancioVar = 0
let tentativi = 0
while (risultatoLancioVar !== 6) {
  const da1a6round = Math.random() * 6
  const da1a6 = Math.ceil(da1a6round)
  risultatoLancioVar = da1a6
  tentativi = tentativi + 1
}
console.log("Ho fatto: " + risultatoLancioVar + ", ci ho messo: " + tentativi)

// let risultatoDelLancio = 0

// while (
//   // in questa condizioni dovrei trovare il modo di capire se in un lancio precedente ho già fatto 6
//   risultatoDelLancio !== 6
// ) {
//   const lancio = Math.ceil(Math.random() * 6) //1-6
//   // è solo qui che posso sapere se ho fatto 6!
//   // memorizzare il risultato del lancio nella variabile "risultato"
//   risultatoDelLancio = lancio // diventa il valore che ho appena estratto
//   console.log("ciao! ho fatto", lancio)
// }

// FUNZIONAMENTO DI QUESTO CICLO WHILE
// 1) la variabile "risultatoDelLancio" viene creata con una let e le viene assegnato il valore di 0
// 2) arrivo al ciclo while: il ciclo while valuta la sua condizione: risultatoDelLancio è 0, quindi
// risultatoDelLancio !== 6 fa TRUE -> ENTRO NEL CICLO WHILE
// 3) lancio il dado, mettiamo che esca 3
// 4) questo 3 diventa il nuovo valore di risultatoDelLancio
// 5) stampo il console.log()
// 6) l'iterazione del while è finita: ora lui ricontrolla la sua condizione, vede che 3 non è 6, quindi
// la sua condizione ancora una volta torna TRUE -> ripete il blocco { }
// 7) viene estratto 6, viene assegnato il 6 a risultatoDelLancio, il ciclo while prova a ripartire ma
// questa volta la condizione 6 !== 6 torna FALSE -- > IL CICLO WHILE FINISCE
