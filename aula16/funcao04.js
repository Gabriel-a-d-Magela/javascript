function fatorial (n) {
    let fat = 1
    for(let cont = n; cont > 1; cont--) {
        fat *= cont
    }
    return fat
} 

//5! = 5 x 4 x 3 x 2 x 1
console.log(fatorial(4))