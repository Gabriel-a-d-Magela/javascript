"use strict";
// Usar a diretiva sempre que possível, pois ela oferece muitos benefícios

const f = (num1, num2) => (num1 + num2);
console.log(f(10, 20));

const v = "Tudo bem?";

console.log(v);

// Só funciona no corpo de funções com parâmetros simples
function minhaFuncao() {
    const t = "Como está o tempo hoje?";
    console.log(t);
}

// Colocar a diretiva dentro dessa função lançará um erro
function soma(a = 1, b = 2) {
    return a + b;
}

minhaFuncao();
console.log(soma())