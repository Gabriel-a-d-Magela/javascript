"use strict";

// IIFE (Immediately Invoked Function Expression)

// Casos de uso

// Evite poluir o namespace global

/* Quando nossa aplicação inclui muitas funções e variáveis globais de diferentes arquivos de origem, é importante limitar o número de variáveis globais */

/* Se nós temos um código de inicialização que não usaremos novamente, então podemos usar o padrão IIFE */

(() => {
    // Algum código de inicialização
    let primeiraVar
    let segundaVar
})();

// primeiraVar e segundaVar serão descartadas depois que a função termina sua execução

// The module pattern (o padrão do módulo)

/* Também usaríamos o IIFE para criar variáveis e métodos públicos e privados */

const makeWithdraw = (balance) =>
    ((copyBalance) => {
        let balance = copyBalance; // Essa variável é privada
        const doBadThings = () => {
            console.log("Farei coisas ruins com seu dinheiro");
        };
        doBadThings();
        return {
            withdraw(amount) {
                if (balance >= amount) {
                    balance -= amount;
                    return balance;
                }
                return "Dinheiro insuficiente";
            },
        };
    })(balance);

const primeiraConta = makeWithdraw(100);
console.log(primeiraConta.balance);
console.log(primeiraConta.withdraw(20));
console.log(primeiraConta.withdraw(30));
console.log(primeiraConta.doBadThings);
const segundaConta = makeWithdraw(20);
console.log(segundaConta.withdraw(30));
console.log(segundaConta.withdraw(20));
