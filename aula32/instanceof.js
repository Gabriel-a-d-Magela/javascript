"use strict";

const theDay = new Date(2007, 12, 25);
if (theDay instanceof Date) {
    console.log("Esse objeto é do tipo Date");
}

const frutas = ["Maçã", "Banana", "Melancia"];
if (frutas instanceof Array) {
    console.log(frutas.length);
}