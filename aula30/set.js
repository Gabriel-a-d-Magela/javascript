"use strict";

let eventos = new Set();
let evento1 = { type: "Show musical", day: "Sábado"};
let evento2 = { type: "Lançamento de livro", day: "Quarta-feira"};
let evento3 = { type: "Reunião de negócios", day: "Quinta-feira"};
let evento4 = { type: "Partida de vôlei", day: "Segunda-feira"};
// Vamos adicionar cada evento ao conjunto
eventos.add(evento1);
eventos.add(evento2);
eventos.add(evento3);
eventos.add(evento4);

for (let item of eventos.values()) {
    console.log(item);
}

console.log(eventos.has(evento1));
console.log(eventos.delete(evento3));
console.log(eventos);
console.log(eventos.size);
eventos.clear();
console.log(eventos.size);

let cidades = new Set();
let cidade1 = { name: "Belo Horizonte"};
let cidade2 = { name: "São Paulo"};
let cidade3 = { name: "Rio de Janeiro"};

cidades.add(cidade1);
cidades.add(cidade2);
cidades.add(cidade1);
cidades.add(cidade3);

cidades.forEach((cidade, cidades) => {
    console.log(cidade);
});