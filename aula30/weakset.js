"use strict";

let visitedSet = new WeakSet();

let joao = {name: "joao"};
let peter = {name: "peter"};
let maria = {name: "maria"};

visitedSet.add(joao); // Joao nos visitou
visitedSet.add(peter); // depois peter
visitedSet.add(joao); // Joao novamente

// visitedSet tem 2 usuários agora

// verificar se joao visitou?
console.log(visitedSet.has(joao));

// verificar se maria visitou?
console.log(visitedSet.has(maria));

joao = null;

// visitedSet será limpo automaticamente