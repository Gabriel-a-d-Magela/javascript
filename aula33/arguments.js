"use strict";

function func1(a, b, c) {
    console.log(arguments[0]);
    console.log(arguments[1]);
    console.log(arguments[2]);
}

func1(1, 2, 3);

// Código mais moderno
function func2(...theArgs) {
    for (const args of theArgs) {
        console.log(args);
    }
}

func2(1, 2, 3);