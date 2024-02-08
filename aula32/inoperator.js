"use strict";

// Arrays
const animais = ["cachorro", "gato", "papagaio", "coelho", "hamster"];

console.log(1 in animais);
console.log(3 in animais);
console.log(6 in animais);
console.log("cachorro" in animais); // false
// Precisa especificar o número do index, não o valor do index

console.log("length" in animais); // true
// length é uma propriedade do array

// Built-in objects (objetos nativos ou integrados)
console.log("PI" in Math);
const myString = new String("coral");
console.log("length" in myString);

// Custom objects (Objetos personalizados)
const pessoa = {name: "Gabriel", idade: 21, profissao: "Estudante"};
console.log("name" in pessoa);
console.log("idade" in pessoa);