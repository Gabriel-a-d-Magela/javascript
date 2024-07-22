var numAposta = [];
var numSorte = [];

function compararArrays(a1, a2) {
    return JSON.stringify(a1) === JSON.stringify(a2);
};

function numerosRepetidos(array) {
    return (new Set(array)).size !== array.length;
}

function gerarNumerodaSorte() {
    while (true) {
        for (let cont = 0; cont < 6; cont++) {
            var v = Math.floor(Math.random() * 6) + 1;
            numSorte.push(v);
        };
        // Verifica se os números são repetidos
        let repete = numerosRepetidos(numSorte);
        if (repete === true) {
            for (let contador = 0; contador < 6; contador++) {
                numSorte.pop();
            };
        }
        console.log(numSorte);
        // Verifica se os arrays são iguais
        let res = (compararArrays(numAposta, numSorte));
        if (res === true) {
            alert("PARABÉNS! VOCÊ É O NOVO MILIONÁRIO!!!");
            break;
        // Caso contrário, apaga os valores
        } else {
            for (let contador = 0; contador < 6; contador++) {
                numSorte.pop();
            };
        };
    };
};

function erro() {
    alert("[ERRO] Digite um valor entre 1 e 6")
}
function apostar() {
    let prinum = document.getElementById("primeiro_numero");
    let secnum = document.getElementById("segundo_numero");
    let ternum = document.getElementById("terceiro_numero");
    let quarnum = document.getElementById("quarto_numero");
    let quinum = document.getElementById("quinto_numero");
    let sexnum = document.getElementById("sexto_numero");
    /* Testa se os inputs estão vazios */
    if (prinum.value.length == 0 || secnum.value.length == 0 || ternum.value.length == 0 || quarnum.value.length == 0 || quinum.value.length == 0 || sexnum.value.length == 0) { /* O 0 é valor não digitado*/ 
        alert("[ERRO] Digite um valor!");
    } else {
        prinum = Number(prinum.value);
        secnum = Number(secnum.value);
        ternum = Number(ternum.value);
        quarnum = Number(quarnum.value);
        quinum = Number(quinum.value);
        sexnum = Number (sexnum.value);
        /* Testa se os valores estão na faixa de valores correta */
        if (prinum < 1 || prinum > 6) {
            erro();
        } else if (secnum < 1 || secnum > 6) {
            erro();
        } else if (ternum < 1 || ternum > 6) {
            erro();
        } else if (quarnum < 1 || quarnum > 6) {
            erro();
        } else if (quinum < 1 || quinum > 6) {
            erro();
        } else if (sexnum < 1 || sexnum > 6) {
            erro();
        } else {
            /* Testa se o array está vazio */
            if (numAposta.length === 0) {
                numAposta.push(prinum);
                numAposta.push(secnum);
                numAposta.push(ternum);
                numAposta.push(quarnum);
                numAposta.push(quinum);
                numAposta.push(sexnum);
                };
            if (numAposta[0] == numAposta[1]) {
                alert("[ERRO] Os valores não podem ser repetidos!");
                for (let i = 0; i < 6;i++) {
                    numAposta.pop();
                };
            } else {
                gerarNumerodaSorte();
            };
            };
            
        };
};