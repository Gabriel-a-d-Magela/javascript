// Estrutura de dados

// Arrays
const arr = [1, 'a', 2, 'b']; // arrays são heterogêneos

console.log(arr[1]);

const arr1 = [
    [1, 2, 3], // index 0
    [4, 5, 6], // index 1
    [7, 8, 9], // index 2
];

console.log(arr1[0]);

// Objects (hash tables)

const obj = {
    prop1: 'Im',
    prop2: 'an',
    prop3: function() {console.log('Olá!')}
};
obj.prop3();
