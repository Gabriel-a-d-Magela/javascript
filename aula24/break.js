let x = 0;

while(x < 5) {
    if(x === 3) {
        break;
    };
    x = x + 1;
};

console.log(x);

// break label
firstLoop: for (let c = 0; c < 3; c++) {
    for (let d = 0; d < 3; d++) {
        // Se a condição for satisfeita, pare ambos os loops
        if (c === 2 && d === 2) {
            console.log(c, d);
            break firstLoop;
        };
    };
};