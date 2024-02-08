"use strict";

// Adição de BigInts
const x = () => 1n + 2n;

console.log(x());

// Divisão de BigInts é arrendondada para zero
const b = 1n / 2n;
console.log(b);
console.log(typeof(b));