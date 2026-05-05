const city = 'New York'; // NON MODIFICARE QUESTA RIGA
const cityName = 'City'; // NON MODIFICARE QUESTA RIGA
const shoppingList = 'mele, banane, arance, uva'; // NON MODIFICARE QUESTA RIGA
const hello = 'hello'; // NON MODIFICARE QUESTA RIGA

// 1. Cerca un carattere in una stringa
// Stampa l'INDICE con cui viene trovato
// il carattere Y nella variabile city
// Soluzione Alternativa: city.search('Y')
const cityIndex = city.indexOf('Y');
console.log(cityIndex); // Output: 4

// 2. Sotto-stringhe
// Stampa la sotto-stringa "York" dalla variabile city
// Soluzioni Alternative:
// city.slice(4)
// city.substring(4, 8)
// city.substring(city.indexOf('Y'))
const citySubstring = city.substring(4);
console.log(citySubstring); // Output: "York"

// 3. Sostituzione
// Sostituisci 'York' con 'Delhi'
// Soluzione Alternativa: city.replace(citySubstring, 'Delhi')
const cityReplaced = city.replace('York', 'Delhi');
console.log(cityReplaced); // Output:  "New Delhi"

// 4. Template literal
// Concatena due stringhe usando la sintassi `${var}`
// e rendi cityNameConcat uguale a 'New York City'
const cityNameConcat = `${city} ${cityName}`;
console.log(cityNameConcat); // Output: "New York City"

// 5. Tutto in maiuscolo
// Trasforma tutto in maiuscolo la stringa della variabile hello
const upperCaseHello = hello.toUpperCase();
console.log(upperCaseHello); // Output: "HELLO"
