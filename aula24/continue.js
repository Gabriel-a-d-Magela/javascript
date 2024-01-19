let text = '';

for(let i = 0; i < 10; i++) {
    if(i === 3) {
        continue;
    };
    text = text + i;
};

console.log(text);

let x = 0;
let y = 0;

while(y < 5) {
    y++;

    if(y === 3) {
        continue;
    };

    x += y;
};

console.log(x);

etiqueta: for (let c = 0; c < 5; c++) {
    for (let d = 0; d < 5; d++) {
        if (c === 3 || d === 3) {
            continue etiqueta;
        };
        console.log(c, d);
    };
};