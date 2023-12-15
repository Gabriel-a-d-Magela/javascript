//Inicializadores de objetos ou "literais de objetos"

const obj = {  // <--
    property1: 1, //propriedade como um identificador
    2: 2, // propriedade como um número
    'property n': 3, //propriedade como uma string
};

console.log(obj['property n']); //propriedade number ou string tem que ser colocada entre colchetes

let x;
let cond = true
if (cond) {  // <--
    x = {greeting: 'hi there'};
};

console.log(x.greeting);

const myHonda = {  // <--
    color: 'red',
    wheels: 4,
    engine: {cylinders: 4, size: 2.2},
};

console.log(myHonda.engine.cylinders);


// Using a constructor function / Usando uma função construtora

function Car(make, model, year, owner) { // <-- Isso é um construtor
    this.make = make;
    this.model = model;
    this.year = year;
    this.owner = owner;
}

function Person(name, age, sex) {
    this.name = name;
    this.age = age;
    this.sex = sex;
}

const rand = new Person('Rand McKinnon', 33, 'M');
const ken = new Person('Ken Jones', 39, 'M');

const car1 = new Car('Eagle', 'Talon Tsi', 1993, rand);
const car2 = new Car('Nissan', '300ZX', 1992, ken);

console.log(car1);
console.log(car2.owner.name);
console.log(car1.color = 'black');
console.log(car1);


// Using the Object.create() method / Usando o método Object.create()

// Propriedades de Animal e encapsulamento de método
const Animal = {
    type: 'Invertebrates', // Valor padrão da propriedade
    displayType() {
        // Método que exibe o tipo do animal
        console.log(this.type);
    },
};

// Criando um novo tipo de animal chamado animal1
const animal1 = Object.create(Animal);
animal1.displayType();

// Criando um novo tipo de animal chamado fish
const fish = Object.create(Animal);
fish.type = 'Fishes';
fish.displayType();

// Acessando propriedades

// Dot notation / Notação de ponto
car2.make = 'Ford';
car2.model = 'Mustang';
car2.year = 1969;

// Bracket notation / Notação de colchtes
car2['make'] = 'Ford';
car2['model'] = 'Mustang';
car2['year'] = '1969';

const myObj = {};
const str = 'myString';
const proba = Math.random();
const anotherObj = {};

//Criando propriedades adicionais para myObj
myObj.type = 'Sintaxe de ponto para uma chave chamada type';
myObj['Data criada'] = 'Essa chave tem um espaço';
myObj[str] = 'Essa chave é a variável str';
myObj[proba] = 'Um número aleatório é a chave aqui';
myObj[anotherObj] = 'Essa chave é o objeto anotherObj';
myObj[''] = 'Essa chave é uma string vazia';

console.log(myObj);
console.log(myObj.myString);

// Enumerating properties / Enumerando propriedades

// for..in loops
function showProps(obj, objName) {
    let result = '';
    for (const i in obj) {
        // Object.hasOwn() é usado para excluir propriedades de objetos
        // prototype chain só exibe "propriedades próprias"
        if (Object.hasOwn(obj, i)) {
            result += `${objName}.${i} = ${obj[i]}\n`;
        }
    }
    console.log(result);
}

// Objects.keys()

function showProps(obj, objName) {
    let result = '';
    Object.keys(obj).forEach((i) => {
        result += `${objName}.${i} = ${obj[i]}\n`
    });
    console.log(result);
}

// Object.getOwnPropertyNames()

function listAllProperties(myObj) {
    let objectToInspect = myObj;
    let result = [];

    while (objectToInspect !== null) {
        result = result.concat(Object.getOwnPropertyNames(objectToInspect));
        objectToInspect = Object.getPrototypeOf(objectToInspect);    
    }
    return result;
}

// Deleting properties / Deleteando propriedades

// Cria um novo objeto, myobj, com duas propriedades, a e b
const myobj = new Object();
myobj.a = 5;
myobj.b = 12;

// Remove a propriedade a, deixando myobj apenas com a propriedade b.
delete myobj.a;
console.log('a' in myobj);