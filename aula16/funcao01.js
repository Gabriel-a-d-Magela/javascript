function parimp(n) {
    if (n % 2 == 0) {
        return 'Par!'
    } else {
        return 'Impar!'
    }
}

let resultado = parimp(11)
console.log(`O valor digitado é ${resultado}`)