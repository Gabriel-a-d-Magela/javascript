let set0 = new Set([9, 15, "a string", {"objectKey": "objectValue"}]);
set0.add(true);

let arr = [...set0]; // desestruturação

console.log(arr);

let arr2 = [9, 15, "a string", {"objectKey": "objectValue"}];

let arr2converted = [...new Set(arr2)]; // restruturação

console.log(arr2converted);

// Vamos ver um exemplo em que temos itens duplicados em um array e queremos filtrá-los. Podemos fazer isso de duas maneiras:

// Método 1
let users = ["John", "Murray", "Jane", "Jane", "Anne"];

function unique(users) {
    return Array.from(new Set(users));
}

console.log(unique(users));

// Método 2

let set = new Set(users);
let arrFromSet = [...set];

console.log(arrFromSet);