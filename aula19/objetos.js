const obj = {
    property1: 1, //propriedade como um identificador
    2: 2, // propriedade como um número
    'property n': 3, //propriedade como uma string
};

console.log(obj['property n']); //propriedade number ou string tem que ser colocada entre colchetes

let x;
let cond = true
if (cond) {
    x = {greeting: 'hi there'};
};

console.log(x.greeting);

const myHonda = {
    color: 'red',
    wheels: 4,
    engine: {cylinders: 4, size: 2.2},
};

console.log(myHonda.engine.cylinders);