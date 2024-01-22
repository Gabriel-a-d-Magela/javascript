/* Try, catch, finally */

try {
    console.log("Começo das minhas tentativas");

    ciclounico;

    console.log("Fim das minhas tentativas -- nunca alcançado");

} catch(err) {

    console.log("Um erro ocorreu: " + err);

} finally {
    console.log("Isso sempre vai acontecer");
};

console.log("A execução continua...")

let json = '{"age": 30}';

try {
    let user = JSON.parse(json);
    if (!user.name) {
        throw new SyntaxError("Dados incompletos: sem nome");
    };

    console.log(user.name);
} catch(e) {
    console.log("JSON Error: " + e.message);
};