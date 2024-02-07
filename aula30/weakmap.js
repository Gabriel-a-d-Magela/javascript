"use strict";

let weakMap = new WeakMap();

let obj = {};

// Objeto como chave
weakMap.set(obj, "ok")

// Não pode usar string como chave
// weakMap.set("test", "letsgo");
// Erro, porque test não é um objeto

let carlos = {name: "Carlos"};

weakMap.set(carlos, "...");

// sobrescreveu a referência
carlos = null;

// carlos foi removido da memória