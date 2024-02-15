let x = 3;

function somar() {
    let x = 100;
    function somarMais() {
        return x + 3;
    };
    return somarMais()
};
x = 43;
console.log(somar());