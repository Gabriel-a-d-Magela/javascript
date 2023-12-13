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