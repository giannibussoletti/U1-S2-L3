// CICLI in JS -> LOOP in inglese
// Un clico nello sviluppo software, è una struttura che permette di RIPETERE l'esecuzione
// di un po' di righe di codice un numero determinato o indeterminato di volte.
// Si usano per avere un codice più pulito e essere ricuri di portare a completamento
// determinate tipologie di operazioni.

// esistono principalmente due tipi di cicli
// a) CICLI che NON conoscono a priori il numero di iterazioni necessario per finire l'operazione (es. while)
// b) CICLI che CONOSCONO a priori il numero di iterazioni per completare il task (es. for)

// CICLO FOR
// Un ciclo for è un blocco di codice che viene ri-eseguito un numero PRE-FISSATO di volte!
// Il numero di volte lo decido io e dipende dal numero di iterazioni desiderate.

//for(creazioneContatore; verificaContatore; incrementoContatore)
// for crea una variabile volante, e il suo nome di solito è identificato con la lettera "i" per index
for (
  let i = 0;
  i < 5;
  i++ // i++ è una versione contratta di i = i + 1 il ++ può essere messo affianco a qualsiasi variabile numerica e ne aumenta il valore di 1
) {
  console.log("il codice è stato ripetuto: ", i + 1)
  // sezione per il codice da ripetere
}
// 1) si crea il contatore i che solitamente parte da 0
// 2) il ciclo for verifica che i sia minore di es. 5, se questa comparazione torna TRUE si entra nel for
// 3) al raggiungimento della graffa finale, i viene incrementato di 1 ("i++")
// 4) viene riferificato se i è ancora più piccolo di 5, se torna TRUE si ri-esegue il for
// 5) ...
// 6) quando i era 4 e viene incrementata a 5, la condizione i < 5 tornerà FALSE -> il ciclo si ferma

// ... come mai il ciclo FOR è quello che utilizzeremo più spesso? perchè viene MOLTO COMODO
// per l'esplorazione e 1a manipolazione degli ARRAYs

const arrayDiNomi = ["Hina", "Daniele", "Cristina", "Antonii", "Franko", "Mohamed", "Michelangelo"]

// invece di fare un console.log per ciascuno Posso usare un CICLO FOR!

for (let i = 0; i < arrayDiNomi.length; i++) {
  // all'inizio, 1a i vale 0, poi 1, 2, 3, 4, 5, 6
  // 1a i diventerà sempre un INDICE VALIDO per esplorare l'array
  console.log(arrayDiNomi[i])
}

//ARRA

const dogs = [
  { name: "Fufi", age: 2 },
  { name: "Pluto", age: 4 },
  { name: "Gigione", age: 7 },
]

let totalAges = 0
for (let i = 0; i < dogs.length; i++) {
  //   console.log(i) // numero
  //   console.log(dogs[i]) // oggetto
  // qui dentro entrerò 3 volte
  // 1a prima volta i vale
  // 1a seconda volta i vale 1
  // 1a terza volta i vale 2
  totalAges = totalAges + dogs[i].age
}

console.log("L'età totale dei cani è: " + totalAges) // 13
