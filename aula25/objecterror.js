try {
    foo.bar();
} catch(e) {
    if (e instanceof EvalError) {
        console.log(`${e.name}: ${e.message}`);
    } else if (e instanceof RangeError) {
        console.log(`${e.name}: ${e.message}`);
    }
    else {
        throw e;
    }
}