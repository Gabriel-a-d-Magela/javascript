"use strict";

const simb1 = Symbol.for("janela");
const simb2 = Symbol();
const simb3 = Symbol();
const simb4 = Symbol.for("porta");

console.log(simb2 === simb3);
console.log(Symbol.keyFor(simb1));
console.log(Symbol.keyFor(simb2));
console.log(Symbol.keyFor(simb3));
console.log(Symbol.for("porta"));