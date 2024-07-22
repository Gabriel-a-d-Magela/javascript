var numeroDaSorte = [1, 2, 3, 4, 5, 6];
var numeroPremiado = [];

function compararArrays(a1, a2) {
    // Compara se dois arrays são iguais
    return JSON.stringify(a1) === JSON.stringify(a2);
};

function numerosRepetidos(array) {
    // Verifica se o array tem valores repetidos
    return (new Set(array)).size !== array.length;
}

function gerarResultado() {
        // Gera um número aleatório
    while (true) {
        for (let cont = 0; cont < 6; cont++) {
            var v = Math.floor(Math.random() * 6) + 1;
            numeroPremiado.push(v);
        };
        // Verifica se os números são repetidos
        let repete = numerosRepetidos(numeroPremiado);
        if (repete === true) {
            for (let contador = 0; contador < 6; contador++) {
                numeroPremiado.pop();
                console.log("Valores duplicados, tentativa anulada!");
            };
        }
        console.log(numeroPremiado);
        // Verifica se os arrays são iguais
        let res = (compararArrays(numeroDaSorte, numeroPremiado));
        if (res === true) {
            console.log("PARABÉNS! VOCÊ É O NOVO MILIONÁRIO!!!");
            break;
        // Caso contrário, apaga os valores
        } else {
            console.log("Não foi dessa vez...");
            for (let contador = 0; contador < 6; contador++) {
                numeroPremiado.pop();
            };
        };
    };
};

gerarResultado();