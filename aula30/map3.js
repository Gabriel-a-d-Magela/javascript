"use strict";

let obj = {}, map = new Map();

let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

for (let i = 0; i < users.length; i++) {
    obj[i] = i;
    map.set(i, i);
}

let result;

console.time("Object");
result = obj.hasOwnProperty("Anne");
console.timeEnd("Object");

console.time("Map");
result = map.has("Anne");
console.timeEnd("Map");