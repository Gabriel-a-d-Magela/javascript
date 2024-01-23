function soma(...theArgs) {
    let total = 0;
    for (const arg of theArgs) {
        total += arg;
    };
    return total;
}

console.log(soma(1, 2, 3));
console.log(soma(1, 2, 3, 4));