var num = 1;
/* Escopo global */

if (num === 1) {
    num = 2;
    console.log(`Variável declarada com var ${num}`);
    /* Valor esperado 2 */
}

console.log(`Variável declarada com var ${num}`);
/* Valor esperado 2 */

let n = 1;
/* Escopo local/Block escope */

if (n === 1) {
    let n = 2;
    console.log(`Variável declarada com let ${n}`);
    /* Valor esperado 2 */
}

console.log(`Variável declarada com let ${n}`);
/* Valor esperado 1 */

const numero = 1;
/* Escopo local/Block escope */

if (numero === 1) {
    console.log(`Variável declarada com const ${numero}`);
    /* Valor esperado 1 */
}

console.log(`Variável declarada com const ${numero}`);
/* Valor esperado 1 */
