"use strict";

// Exemplos de iteração em uma coleção de mapas

let userIDs = new Map();

let user1 = {name: "John"}, user2 = {name: "Murray"}, user3 = {name: "Jane"};

userIDs.set(user1, 1) .set(user2, 2) .set(user3, 3);

// Método 1

for (let [name, id] of userIDs) {
    console.log(name);
    console.log(id);
}

// Método 2

userIDs.forEach( (name, id) => {
    console.log(name);
    console.log(id);
});

const obj = {
    name: "John",
    id: 1,
}

const map = new Map(Object.entries(obj));

console.log(map.get("name"));