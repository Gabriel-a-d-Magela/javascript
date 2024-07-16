var numAposta = [];
var numSorte = [];

function gerarNumerodaSorte() {
    for (let cont = 0; cont < 6; cont++) {
        var v = Math.floor(Math.random() * 60) + 1
        numSorte.push(v);
    };

    alert(numSorte);

    if (numAposta == numSorte) {
        alert("PARABÉNS!");
    } else {
        for (let contador = 0; contador < 6; contador++) {
            numSorte.pop()
        }
    }
}

function erro() {
    alert("[ERRO] Digite um valor entre 1 e 60")
}
function apostar() {
    let prinum = document.getElementById("primeiro_numero");
    let secnum = document.getElementById("segundo_numero");
    let ternum = document.getElementById("terceiro_numero");
    let quarnum = document.getElementById("quarto_numero");
    let quinum = document.getElementById("quinto_numero");
    let sexnum = document.getElementById("sexto_numero");
    if (prinum.value.length == 0 || secnum.value.length == 0 || ternum.value.length == 0 || quarnum.value.length == 0 || quinum.value.length == 0 || sexnum.value.length == 0) { /* O 0 é valor não digitado*/ 
        alert("[ERRO] Digite um valor!");
    } else {
        prinum = Number(prinum.value);
        secnum = Number(secnum.value);
        ternum = Number(ternum.value);
        quarnum = Number(quarnum.value);
        quinum = Number(quinum.value);
        sexnum = Number (sexnum.value);
        if (prinum < 1 || prinum > 60) {
            erro();
        } else if (secnum < 1 || secnum > 60) {
            erro();
        } else if (ternum < 1 || ternum > 60) {
            erro();
        } else if (quarnum < 1 || quarnum > 60) {
            erro();
        } else if (quinum < 1 || quinum > 60) {
            erro();
        } else if (sexnum < 1 || sexnum > 60) {
            erro();
        } else {
            if (numAposta.indexOf(prinum) == -1) {
                numAposta.push(prinum);
                numAposta.push(secnum);
                numAposta.push(ternum);
                numAposta.push(quarnum);
                numAposta.push(quinum);
                numAposta.push(sexnum);
            };
        };
    gerarNumerodaSorte();
    };
};