// COSTRUTTO SWITCH
// uno "switch" è una maniera più ordinata di creare un if/else if/else if/else

// ESEMPIO

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

// questa struttura può essere scritta in maniera più ordinata tramite "switch"

switch (myName) {
  case "Gianni":
    console.log("Benvenuto, Gianni!")
    break // interrompe lo switch perché altrimenti continuerebbe a effettuare anche gli altri case
  case "Christian":
    console.log("Benvenuto, Christian!")
    break
  case "Franco":
    console.log("Bentornato, Franco!")
    break
  default:
    console.log("Benvenuto, Sconosciuto!")
}
