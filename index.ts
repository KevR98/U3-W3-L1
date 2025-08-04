// 1) Quali sono i tipi primitivi principali in TypeScript?

/* RISPOSTA */

/* 
I tipi principali primitivi in TypeScript sono: 
    - number
    - string
    - boolean
    - null
    - undefined
    - any
*/

// 2) Crea tre variabili tipizzate: una stringa con il tuo nome, un numero con la tua età, e un booleano che indica se stai studiando TypeScript.

/* RISPOSTA */

const myName: string = 'Kevin';
const myAge: number = 26;
const studyingTS: boolean = true;

// 3) Tipizza il parametro della seguente funzione:
// const greet = (name) => { return "Ciao " + name }

/* RISPOSTA */

const greet = (name: string) => {
  return 'Ciao' + name;
};

// 4) Specifica il tipo di ritorno della seguente funzione:

// const sum = (a: number, b: number) => { return a + b }

/* RISPOSTA */

const sum = (a: number, b: number): number => {
  return a + b;
};

// 5) Crea una funzione che accetti un prezzo e restituisca il prezzo con IVA (22%). Usa i tipi appropriati.

/* RISPOSTA */

const price = (n: number): number => {
  return n * 1.22;
};

// 6) Crea una funzione che concateni due stringhe e restituisca la lunghezza totale.

/* RISPOSTA */

const concatString = (str1: string, str2: string): number => {
  return (str1 + str2).length;
};

// 7) Cos'è un Type Union e come si scrive?

/* RISPOSTA */

/* 
Il Type Union è un modo discrivere al meglio la tipizzazione di alcune porzioni di codice aggiungendo il simbolo |.
*/

let variable: string | boolean | number;
variable = 'Ciao';
variable = true;
variable = 50;

// 8) Crea una variabile che possa contenere un numero, null o undefined.

/* RISPOSTA */

let n: number | null | undefined;

// 9) Crea un tipo per rappresentare i giorni della settimana usando union di stringhe letterali.

/* RISPOSTA */

type weekDays =
  | 'Monday'
  | 'Tuesday'
  | 'Wednesday'
  | 'Thursday'
  | 'Friday'
  | 'Saturday'
  | 'Sunday';

// 10) Tipizza il seguente array di numeri nei due modi possibili:
// const numbers = [1, 2, 3];

/* RISPOSTA */

const numbers: Array<number> = [1, 2, 3];
// oppure : const numbers: number[] = [1, 2, 3];
const numbers2: [number, number, number] = [1, 2, 3];

// 11) Crea una tupla per definire un array di 5 elementi, i primi 3 devono essere stringhe e gli ultimi due numeri.

/* RISPOSTA */

const mixed: [string, string, string, number, number] = [
  'Hello',
  'World',
  '!',
  20,
  30,
];

// 12) Qual è la differenza tra type e interface?

/* RISPOSTA */

// 13) Definisci un'interfaccia in TypeScript per un oggetto dotato di proprietà "firstname", "lastname", e "age".

/* RISPOSTA */

// 14) Crea un'interfaccia per un utente con email obbligatoria e telefono opzionale.

/* RISPOSTA */

// 15) Crea un array tipizzato di oggetti "Studente" con nome e voto.

/* RISPOSTA */

type Studente = {
  nome: string;
  voto: number;
};

const arr: Studente[] = [{ nome: 'Kevin', voto: 30 }];

// 16) Crea un'interfaccia base "Veicolo" e estendila per creare "Auto".

/* RISPOSTA */

// 17) Crea un oggetto che implementi l'interfaccia Auto.

/* RISPOSTA */

// 18) Cosa sono i Generics in TypeScript?

/* RISPOSTA */

// 19) È possibile avere più tipi generici in un'interfaccia?

/* RISPOSTA */

// 20) Crea un'interfaccia generica per una risposta API.

/* RISPOSTA */
