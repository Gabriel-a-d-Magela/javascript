let x = 10;
// type number
console.log(typeof(x));

x = 'Gabriel';
// type string
console.log(typeof(x));

x = false;
// type boolean
console.log(typeof(x));

let y;
// type undefined
console.log(typeof(y))

x = BigInt(10**42);
// type bigInt
console.log(typeof(x));

x = null;
// type null mas retorna object
console.log(typeof(x));

x = {
    primeiroNome:'Gabriel',
    ultimoNome:'Magela',
    idade: 21,
    corOlhos: 'preto'
};
// type object estrutura de dados
console.log(typeof(x));