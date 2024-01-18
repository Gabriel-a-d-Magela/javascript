const array1 = [10, 20 ,30];
// for...of
for(const i of array1) {
    console.log(`${i}`);
};

const object1 = {
    nome: "Gabriel",
    idade: 21,
    sexo: "Masculino"
};
// for...in
for(const contador in object1) {
    console.log(`${contador}: ${object1[contador]}`);
};