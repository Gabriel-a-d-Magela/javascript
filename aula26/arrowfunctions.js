// Função anônima tradicional

(function (a)  {
    return a + 100;
});

// 1. Remova a palavra "function" e coloque a arrow(seta) entre o argumento e a chave de abertura

(a) => {
    return a + 100;
};

// 2. Remova as chaves e a palavra "return" - o retorno está implícito

(a) => a + 100;

// 3. Remova os parênteses do parâmetro
a => a + 100;