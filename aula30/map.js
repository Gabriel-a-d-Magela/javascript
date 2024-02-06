"use strict";

let users = [{
    id: 1,
    name: "John"
},
{
    id: 2,
    name: "Murray"
},
{
    id: 3,
    name: "Jane"
},
{
    id: 4,
    name: "Jane"
},
{
    id: 5,
    name: "Anne"
}
]

let userNames = users.map(function(user) {
    console.log(user.name);
});

const user1 = new Map();
user1.set("id", 1);
user1.set("name", "John");

console.log(user1.get("id"));

let iterator = user1.entries();

console.log(iterator.next().value);
console.log(iterator.next().value);