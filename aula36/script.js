var vet = [];

function apostar() {
    let prinum = document.getElementById("primeiro_numero");
    let secnum = document.getElementById("segundo_numero");
    let ternum = document.getElementById("terceiro_numero");
    let quarnum = document.getElementById("quarto_numero");
    let quinum = document.getElementById("quinto_numero");
    let sexnum = document.getElementById("sexto_numero");
    if (prinum.value.length == 0 || secnum.value.length == 0 || ternum.value.length == 0 || quarnum.value.length == 0 || quinum.value.length == 0 || sexnum.value.length == 0) { /* O 0 é valor não digitado*/ 
        alert("[ERRO] Digite um valor!");
        prinum = Number(prinum.value);
        secnum = Number(secnum.value);
        ternum = Number(ternum.value);
        quarnum = Number(quarnum.value);
        quinum = Number(quinum.value);
        sexnum = Number (sexnum.value);
        if (prinum < 1 || prinum > 60 || secnum < 1 || secnum > 60 || ternum < 1 || ternum > 60 || quarnum < 1 || quarnum > 60 || quinum < 1 || quinum > 60 || sexnum < 1 || sexnum > 60) {
            alert("[ERRO] Digite um valor entre 01 e 60!");
        };
    };
};