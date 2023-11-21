function contar() {
    var inicio = document.getElementById('inicio')
    var fim = document.getElementById('fim')
    var passo = document.getElementById('passo')
    var resultado = document.getElementById('resultado')

    if(inicio.value.length == 0 || fim.value.length == 0 || passo.value.length == 0) {
        resultado.innerHTML = 'Impossível contar!'
    } else {
        resultado.innerHTML = 'Contando: <br>'
        inicio = Number(inicio.value)
        fim = Number(fim.value)
        passo = Number(passo.value)
        if (passo <= 0) {
            alert('Passo inválido! Considerando PASSO 1')
            passo = 1
        }
        // Contagem crescente
        if (inicio < fim) {
            for(i=inicio ; i<=fim ; i+=passo) {
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
        } else {
            // Contagem descrescente
            for (i=inicio; i >= fim; i-=passo) {
                resultado.innerHTML += ` ${i} \u{1F449}`
            }
        }
        resultado.innerHTML += `\u{1F3C1}`
    } 
}