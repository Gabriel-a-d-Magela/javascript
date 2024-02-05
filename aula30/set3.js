// Vamos ver qual coleção executa a operação mais rapidamente

let arr = [], set = new Set();
let users = ["John", "Murray", "Jane", "Jane", "Anne", "John", "Murray", "Jane", "Jane", "Anne"];

for (let i = 0; i < users.length; i++) {
    arr.push(users[i]);
    set.add(users[i]);
}

let result;

console.time('Array');
result = arr.indexOf("Anne") !== -1;
console.timeEnd('Array');

console.time('Set');
result = set.has("Anne");
console.timeEnd('Set');

// A diferença aqui é muito pequena, mas o set é mais rápido. Se você realizar essas operações em sets de big data, o último tipo de coleta será uma escolha melhor