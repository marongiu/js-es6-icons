// Si scriva una funzione che accetti tre argomenti, un array e
//
// due numeri (a più piccolo di b).
//
// La funzione ritornerà un nuovo array con i valori che hanno
//
// la posizione compresa tra i due numeri


// creo un array di numeri
const arrayNumeri = [1,2,3,4,5,6,7,8,9,10];



// scrivo una funzione che accetti tre argomenti
const numeri = (array, a, b) => {
  // creo un array dove pushare i numeri ordinati
  let ordinati = [];
    // scorro array
  for (let i = 0; i < array.length; i++) {
      // imposto una condizione ( i deve essere compreso tra a e b)
    if (i >= a && i <= b) {
        // se la rispetta lo pusho
      ordinati.push(array[i]);
    }
  }
  return ordinati
};




console.log(numeri(arrayNumeri,3,8))
console.log(arrayNumeri);
