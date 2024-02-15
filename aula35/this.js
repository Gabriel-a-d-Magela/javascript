"use strict";

const obj = {
    nome: "Gabriel",
    idade: 21,
    programmer: true,
    pro_gamer: false,
    exibir() {
        // "this" se refere ao objeto atual
        console.log(this.nome);
    }
}

obj.exibir();

function minhaFuncao() {
    console.log("Ué?");
    return this;
}

minhaFuncao();

let x = this; // Refere-se ao objeto global. No navegador, refere-se ao object.window



