"use strict";

function potencia(x, n) {
    if (n == 1) { // Base da recursão
        return x;
    } else {       // passo recursivo
        return x * potencia(x, n - 1); // Recursão
    }
}

console.log(potencia(3, 3));