// Conversão Implícita - Coerção
let value1 = '5';
let value2 = 9;
let value3 = 7;
let value4 = '2';
let sum = value1 + value2;
let sum2 = value3 * value4;
console.log(sum);
console.log(typeof(sum));
console.log(sum2);
console.log(typeof(sum2));

// Conversão Explícita - Conversão de tipo
let valor = '6';
console.log(valor); // String
console.log(typeof(valor)); 
valor = Number(valor); // <-- Acontece a conversão de tipo
console.log(typeof(valor)); // Number

let valor1 = 20; // Number
valor1 = String(20); // <-- Acontece a conversão de tipo
console.log(typeof(valor1)); // String